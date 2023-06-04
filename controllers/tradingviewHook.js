const path = require('path')
const url = require('url')
const JSONdb = require('simple-json-db')

const databaseURL = 'file:///Users/hector/script/website/databases/tradingview.json'
const folderPath = path.dirname(url.fileURLToPath(databaseURL))
const file = path.join(folderPath, 'tradingview.json')

const db = new JSONdb(file)

module.exports = function handler(req, res) {
  if (!res.req.body.text) {
    return res.status(200).json({
      status: 'failed',
    })
  }

  const [name, status, price] = res.req.body.text.split(':')
  const time = new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2, '0')

  const event = {
    name,
    status,
    time,
    price,
  }

  const instruments = db.get('instruments')

  //format plx
  const key = name

  if (!instruments[key]) {
    instruments[key] = {
      name,
      events: [],
    }
  }

  instruments[key].events.push(event)

  db.set('instruments', instruments)

  res.status(200).json({
    status: 'ok',
  })
}
// curl -H 'Content-Type: application/json; charset=utf-8' -d '{"text": "DAX:bull:13550"}' -X POST http://localhost:3000/api/tradingview-hook
