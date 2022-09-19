var express = require('express');
const { post } = require('.');
var router = express.Router();
const Post = require('../models/post')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   console.log('doc')
//   const post = new Post({
//     text: "test",
//     user: "admin"
//   })
//   post.save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// });

router.get('/', function(req,res,next){
  res.render('new', {title: "create post"})
})

router.post('/', function(req,res,next){
  let post = new Post(req.body)
  post.save()
    .then(res.redirect('/'))
    .catch((err) => console.log(err))
})

module.exports = router;