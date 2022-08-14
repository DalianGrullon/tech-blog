const { Post } = require('../models/index');

const postData = [
  {
    title: 'Rockets',
    content: 'Rockets are FAST',
    user: 'JohnnyRocket'
  },
  {
    title: 'Haines',
    content: 'No, I am not refering to the underwear',
    user: 'ChrisHaine'
  },
  {
    title: 'Level Up',
    content: 'Just practice a lot...',
    user: 'AnotherOne'
  },
  {
    title: 'JavaScript',
    content: 'It is dynamically typed, prototype based...',
    user: 'JSisCool'
  },
  {
    title: 'Python',
    content: 'It is used a LOT for science',
    user: 'JavaVSPython'
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;