var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    layout: false,
    title: 'Editor',
    reactData: {
      route: 'editor',
    }
  });
});

router.get('/reddit', function(req, res, next) {
  res.render('reddit', { 
    layout: false,
    title: 'Reddit',
    reactData: {
      route: 'reddit',
    }
  });
});

module.exports = router;
