const moment = require('moment')
const md = require('markdown-it')()
const allTickers = require('./tickers.json')
const excludeTickers = require('./excludeTickers.json')

const filterTickers = (str) => {
  if (!str) return []

  const tickers = str.match(/[A-Z]{2,5}/g)
  if (!tickers) return []

  const finalTickers = tickers.reduce((acc, curr) => {
    if (allTickers.find((el) => el === curr) && !excludeTickers.find((el) => el === curr)) {
      acc.push(curr)
    }

    return acc
  }, [])

  return [...new Set(finalTickers)]
}

const mapper = (obj) => {
  const str = obj.selftext.split('\n').map((s) => {
    if (/&#x200B;/i.test(s)) return ''
    if (/^https:\/\/preview.redd/i.test(s)) return ''
    if (/\(https:\/\/preview.redd/i.test(s)) return `!${s}`
    return s
  }).join('\n')

  return {
    title: obj.title,
    url: obj.url,
    text: obj.selftext && md.render(str),
    createdDate: moment((obj.created_utc + 3600) * 1000).locale('sv').format('DD/MM HH:mm'),
    utcTime: obj.created_utc,
    subreddit: obj.subreddit_name_prefixed,
    upvoteRatio: Math.floor(obj.upvote_ratio * 100),
    numOfComments: obj.num_comments,
    tickers: filterTickers(obj.title)
  }
}

module.exports = mapper
