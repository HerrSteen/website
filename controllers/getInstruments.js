const path = require('path')
const url = require('url')
const JSONdb = require('simple-json-db')

const databaseURL = 'file:///Users/hector/script/website/databases/tradingview.json'
const folderPath = path.dirname(url.fileURLToPath(databaseURL))
const file = path.join(folderPath, 'tradingview.json')

module.exports = function handler(req, res) {
  const db = new JSONdb(file)
  const instruments = db.get('instruments')

  res.status(200).json({
    instruments,
  })
}
