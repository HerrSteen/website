const path = require('path')
const JSONdb = require('simple-json-db')

const rootFolder = path.resolve(`${__dirname}/../`)
const file = path.join(rootFolder, 'databases/tradingview.json')
const db = new JSONdb(file)

const pad = (str) => String(str).padStart(2, '0')

const getTime = () => {
  const date = new Date()
  return pad(date.getHours()) + ':' + pad(date.getMinutes())
}

const getDate = () => {
  const date = new Date()
  return pad(date.getDay()) + '/' + (date.getMonth())
}
module.exports = function handler(req, res) {
  if (!res.req.body.text) {
    return res.status(200).json({
      status: 'failed',
    })
  }

  const [name, status, price] = res.req.body.text.split(':')
  const time = getTime()
  const date = getDate()

  const event = {
    name,
    status,
    time,
    date,
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
