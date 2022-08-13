const router = require('express').Router();
const { Post, User } = require('../../models/index');

// post
router.post('/create', async (req, res) => {
  try {
    const user = await User.findOne({
      raw: true,
      where: {
        username: req.session.username
      }
    });
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user: user.id
    });

    res.status(201).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update
router.put('/update', async (req, res) => {
  try {
    const dbPostData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content
      },
      {where: {
        id: req.body.id
      }}
    );

    if (!dbPostData[0]) {
      res.status(404).json({ message: 'Could not find post to update!' });
      return;
    }

    res.status(200).json({ message: 'Successfully updated post!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete
router.delete('/delete', async (req, res) => {
  try {
    const dbPostData = await Post.destroy({
      where: {
        id: req.body.id
      }
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'Could not find post to delete!' });
      return;
    }

    res.status(200).json({ message: 'Post has been successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;