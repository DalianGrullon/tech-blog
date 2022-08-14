const { User } = require('../models/index');

const userData = [
  {
    username: 'JohnnyRocket',
    password: 'password'
  },
  {
    username: 'ChrisHaine',
    password: 'password'
  },
  {
    username: 'AnotherOne',
    password: 'password'
  },
  {
    username: 'JSisCool',
    password: 'password'
  },
  {
    username: 'JavaVSPython',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;