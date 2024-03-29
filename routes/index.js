var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    layout: false,
    title: 'Editor',
    reactData: {
      route: 'editor',
    }
  })
})

router.get('/reddit', function (req, res) {
  res.render('reddit', {
    layout: false,
    title: 'Reddit',
    reactData: {
      route: 'reddit',
    }
  })
})

router.get('/tradingview', function (req, res) {
  res.render('tradingview', {
    layout: false,
    title: 'tradingview',
    reactData: {
      route: 'tradingview',
    }
  })
})

module.exports = router
