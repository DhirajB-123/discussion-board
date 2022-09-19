var express = require('express');
var router = express.Router();
const Post = require('../models/post')

const messages = [
  {
    text: 'hello world',
    user: 'db'
  },
  {
    text: 'lol will it work',
    user: 'PauseChamp'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find().sort({createdAt: -1})
    .then((result) => {
      res.render('index', {title: "discussion board", messages: result})
    })
    .catch((err) => console.log(err))
  // res.render('index', { title: "discussion board", messages: messages });
});

router.post('/', function(req, res, next){
  console.log(req.body)
})

module.exports = router;
