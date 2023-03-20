var express = require('express');
var router = express.Router();
var redditPostController = require('../controllers/reddit-posts')

router.get('/', function(req, res, next) {
  res.send('API endpoint');
});

router.get('/reddit-posts', redditPostController);

module.exports = router;
