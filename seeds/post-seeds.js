const { Post } = require('../models/index');

const postData = [
  {
    title: 'post 1',
    content: 'sample post 1',
    user: 'user1'
  },
  {
    title: 'post 1 #2',
    content: 'sample post 1',
    user: 'user2'
  },
  {
    title: 'post 2',
    content: 'sample post 2',
    user: 'user3'
  },
  {
    title: 'post 3',
    content: 'sample post 3',
    user: 'user4'
  },
  {
    title: 'post 4',
    content: 'sample post 4',
    user: 'user5'
  },
  {
    title: 'post 5',
    content: 'sample post 5',
    user: 'user6'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;