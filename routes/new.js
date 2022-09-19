var express = require('express');
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
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;