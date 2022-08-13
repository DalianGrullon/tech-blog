const router = require('express').Router();
const { Post, User } = require('../../models/index');

// post
router.post('/', async (req, res) => {
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
router.put('/', async (req, res) => {
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

    res.status(200).json({ message: 'Successfully updated post!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete
router.delete('/', async (req, res) => {});

module.exports = router;