const { Comment } = require('../models/index');

const commentData = [
  {
    content: 'They really are!',
    user: 'JohnnyRocket',
    post: 1
  },
  {
    content: 'Okay, maybe I am',
    user: 'ChrisHaine',
    post: 2
  },
  {
    content: 'In due time...',
    user: 'AnotherOne',
    post: 3
  },
  {
    content: 'It is also problematic at times...',
    user: 'JSisCool',
    post: 4
  },
  {
    content: 'AND AI/ML',
    user: 'JavaVSPython',
    post: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;