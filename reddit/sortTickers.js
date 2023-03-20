const sortTickers = (posts) => {

  // sort out tickers
  const tickers = posts.map((post) => {
    return post.tickers
  })

  //Flattern array
  const r = tickers.reduce((acc, curr) => {
    if (curr && curr[0]) {
      return acc.concat(...curr)
    }

    return acc
  }, [])

  // Count tickers
  const p = r.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    } else {
      acc[curr] += 1
    }

    return acc
  }, {})

  //Filter and put them back in array
  const s = Object.keys(p).filter((key) => p[key] > 1).map((key) => {
    return {
      ticker: key,
      count: p[key]
    }
  })

  const f = s.sort((a, b) => b.count - a.count)

  return f
}

module.exports = sortTickers
