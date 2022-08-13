const router = require('express').Router();
const { Post, User } = require('../models/index'); 
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // render homepage with loggedin status, user data, and post data
  try {
    const postData = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // render login page
});

router.get('/dashboard', withAuth, (req, res) => {
  // render dashboard page
});

router.get('/post', withAuth, (req, res) => {
  // render postpage with post data
});

module.exports = router;