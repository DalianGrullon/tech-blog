const router = require('express').Router();
const { User } = require('../../models/index');

// create new user
router.post('/', (req, res) => {});

// login
router.post('/login', (req, res) => {});

// logout
router.post('/logout', (req, res) => {});

module.exports = router;