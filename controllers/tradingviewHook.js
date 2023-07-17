const AWS = require('aws-sdk')
const s3 = new AWS.S3()

const pad = (str) => String(str).padStart(2, '0')

const getTime = () => {
  const date = new Date()
  return pad(date.getHours()) + ':' + pad(date.getMinutes())
}

const getDate = () => {
  const date = new Date()
  return pad(date.getDay()) + '/' + (date.getMonth())
}
module.exports = async function handler(req, res) {
  console.log('res.req.body....', res.req.body)
  if (!res.req.body) {
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

  let { instruments } = await s3.getObject({
    Bucket: 'cyclic-puce-frightened-reindeer-ca-central-1',
    Key: 'some_files/my_file.json',
  }).promise().then((data) => {
    const str = data.Body.toString('utf-8')
    return JSON.parse(str)
  })

  console.log('---', instruments)
  //format plx
  const key = name

  if (!instruments[key]) {
    instruments[key] = {
      name,
      events: [],
    }
  }

  instruments[key].events.unshift(event)

  await s3.putObject({
    Body: JSON.stringify(instruments),
    Bucket: 'cyclic-puce-frightened-reindeer-ca-central-1',
    Key: 'some_files/my_file.json',
  }).promise()

  res.status(200).json({
    status: 'ok',
  })
}
// curl -H 'Content-Type: application/json; charset=utf-8' -d '{"text": "DAX:bull:13550"}' -X POST http://localhost:3000/api/tradingview-hook
//curl -H 'Content-Type: application/json; charset=utf-8' -d '{"text": "DAX:bull:13550"}' -X POST https://tradingview-494u.onrender.com/tradingview-hook


// curl -H 'Content-Type: text/plain; charset=utf-8' -d 'DAX:bull:13550' -X POST https://tradingview-494u.onrender.com/tradingview-hook

// curl -H 'Content-Type: application/json; charset=utf-8' -d '{"text": "DAX:bull:13550"}' -X POST https://puce-frightened-reindeer.cyclic.app/api/tradingview-hook
