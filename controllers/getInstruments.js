const path = require('path')
const url = require('url')
const JSONdb = require('simple-json-db')

const rootFolder = path.resolve(`${__dirname}/../`)
const file = path.join(rootFolder, 'databases/tradingview.json')

console.log("file", file)

module.exports = function handler(req, res) {
  const db = new JSONdb(file)
  console.log("db", db)
  const instruments = db.get('instruments')
  console.log("ins", instruments)
  res.status(200).json({
    instruments,
  })
}
