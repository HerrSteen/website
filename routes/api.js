var express = require('express')
var router = express.Router()
var redditPostController = require('../controllers/reddit-posts')
var tradingViewHookController = require('../controllers/tradingview-hook')
const getInstrumentsStatus = require('../controllers/getInstrumentsStatus')

router.get('/', function (req, res, next) {
  res.send('API endpoint')
})

router.get('/reddit-posts', redditPostController)

router.post('/tradingview-hook', tradingViewHookController)

router.get('/instruments-status', getInstrumentsStatus)

module.exports = router
