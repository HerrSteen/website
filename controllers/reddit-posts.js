// const Snoowrap = require('snoowrap')
// const mapper = require('../reddit/mapper')
// const sortTickers = require('../reddit/sortTickers')

// const r = new Snoowrap({
//   userAgent: process.env.USER_AGENT,
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   username: process.env.REDDIT_USER,
//   password: process.env.REDDIT_PASSWORD,
// })

// const getPosts = () => {
//   const t = r.getSubreddit('pennystocks').search({query: 'flair:DD', time: 'week', limit: 100, sort: 'new'}).map(mapper)
//   const f = r.getSubreddit('wallstreetbets').search({query: 'flair:DD', time: 'week', limit: 100, sort: 'new'}).map(mapper)

//   return Promise.all([t, f]).then((d) => [...d[0], ...d[1]])
//     .then((d) => d.sort((a, b) => b.utcTime - a.utcTime))
// }

// module.exports = async function handler(req, res) {
//   const posts = await getPosts()
//   const tickers = sortTickers(posts)

//   res.status(200).json({
//     posts,
//     tickers,
//   })
// }

module.exports = async function handler(req, res) {
  // const posts = await getPosts()
  // const tickers = sortTickers(posts)

  // res.status(200).json({
  //   posts,
  //   tickers,
  // })

  res.status(200).json({})
}
