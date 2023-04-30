const path = require('path')
const url = require('url')
const JSONdb = require('simple-json-db')

const databaseURL = 'file:///Users/hector/script/website/databases/tradingview.json'
const folderPath = path.dirname(url.fileURLToPath(databaseURL))
const file = path.join(folderPath, 'tradingview.json')

const db = new JSONdb(file)

module.exports = function handler(req, res) {
  const instruments = db.get('instruments')
  const filteredInstruments = instruments.filter((filterItem, FilterIndex) => {
    const newIndex = instruments.findIndex((findItem) => {
      if (findItem.name === filterItem.name) {
        return true
      }
      return false
    })

    return FilterIndex === newIndex
  })

  res.status(200).json({
    instruments: filteredInstruments,
  })
}
