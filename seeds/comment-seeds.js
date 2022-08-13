const { Comment } = require('../models/index');

const commentData = [
  {
    content: 'comment on post 1',
    user: 'user1',
    post: 1
  },
  {
    content: 'comment on post 2',
    user: 'user2',
    post: 2
  },
  {
    content: 'comment on post 3',
    user: 'user3',
    post: 3
  },
  {
    content: 'comment on post 4',
    user: 'user4',
    post: 4
  },
  {
    content: 'comment on post 5',
    user: 'user5',
    post: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;