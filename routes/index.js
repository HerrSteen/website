var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    layout: false,
    title: 'Pnny - Editor',
    reactData: {
      route: 'editor',
    }
  });
});

module.exports = router;
