const { Comment } = require('../models/index');

const commentData = [
  {
    content: 'comment on post 1',
    user: 1,
    post: 1
  },
  {
    content: 'comment on post 2',
    user: 2,
    post: 2
  },
  {
    content: 'comment on post 3',
    user: 3,
    post: 3
  },
  {
    content: 'comment on post 4',
    user: 4,
    post: 4
  },
  {
    content: 'comment on post 5',
    user: 5,
    post: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;