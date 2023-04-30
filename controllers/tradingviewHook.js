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

    const r = res.req.body.text.split(':')

    const statusObject = {
        instrument: r[0],
        status: r[1],
    }
    const instrumentStatus = db.get('instrumentStatus')
    instrumentStatus.push(statusObject)
    db.set('instrumentStatus', instrumentStatus)

    res.status(200).json({
        status: 'ok',
    })
}
