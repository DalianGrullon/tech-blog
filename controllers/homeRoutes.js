const router = require('express').Router();
const { Post, User } = require('../models/index'); 

router.get('/', (req, res) => {
  // Determine loggedin status
  // render homepage with loggedin status, user data, and post data
});

router.get('/login', (req, res) => {
  // render login page
});

router.get('/dashboard', (req, res) => {
  // middleware to determine whether user is loggedin, if not, route to login page
  // render dashboard page
});

router.get('/post', (req, res) => {
  // middleware to determine whether user is loggedin, if not, route to login page
  // render postpage with post data
});

module.exports = router;