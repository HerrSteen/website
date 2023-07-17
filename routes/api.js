var express = require('express')
var router = express.Router()
var redditPostController = require('../controllers/reddit-posts')
var tradingViewHookController = require('../controllers/tradingviewHook')
const getInstrumentsController = require('../controllers/getInstruments')

router.get('/', function (req, res, next) {
  res.send('API endpoint')
})

router.get('/reddit-posts', redditPostController)

router.post('/tradingview-hook', tradingViewHookController)

router.get('/get-instruments', getInstrumentsController)

module.exports = router
