const router = require('express').Router();
const { Post, User } = require('../models/index'); 
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  // Determine loggedin status
  // render homepage with loggedin status, user data, and post data
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