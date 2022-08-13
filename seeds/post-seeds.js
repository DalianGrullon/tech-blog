const { Post } = require('../models/index');

const postData = [
  {
    title: 'post 1',
    content: 'sample post 1',
    user: 1
  },
  {
    title: 'post 1 #2',
    content: 'sample post 1',
    user: 1
  },
  {
    title: 'post 2',
    content: 'sample post 2',
    user: 2
  },
  {
    title: 'post 3',
    content: 'sample post 3',
    user: 3
  },
  {
    title: 'post 4',
    content: 'sample post 4',
    user: 4
  },
  {
    title: 'post 5',
    content: 'sample post 5',
    user: 5
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;