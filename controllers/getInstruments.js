const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const startDB = require("../databases/tradingview.json")

module.exports = async function handler(req, res) {

  let  instruments  = await s3.getObject({
    Bucket: "cyclic-puce-frightened-reindeer-ca-central-1",
    Key: "some_files/my_file.json",
  }).promise().then((data) => {
    const str = data.Body.toString('utf-8')
    return JSON.parse(str)
  })

  console.log("instruments", instruments)

  res.status(200).json({
    instruments,
  })
}
