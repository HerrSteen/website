const path = require('path')
const JSONdb = require('simple-json-db')

const rootFolder = path.resolve(`${__dirname}/../`)
const file = path.join(rootFolder, 'databases/tradingview.json')

module.exports = function handler(req, res) {
  const db = new JSONdb(file)
  const instruments = db.get('instruments')

  res.status(200).json({
    instruments,
  })
}
