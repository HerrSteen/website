import React, {useState} from 'react'
import { Label, Header, Divider, Icon } from 'semantic-ui-react'

const ListItem = ({item, filter, setFilter}) => {
  const { title, text, url, subreddit, createdDate, upvoteRatio, numOfComments, tickers } = item
  if (!text) return null

  if (filter && !tickers.includes(filter)) {
    return null
  }

  const TickerLine = tickers.map((ticker) => {
    let color = 'grey'
    if (filter === ticker) {
      color = 'red'
    }

    return <Label size="small" className="tickerLabel" color={color} key={ticker + title} onClick={() => setFilter(ticker)}>{ticker}</Label>
  })

  const [readMore, setReadMore] = useState(false)

  const readMoreStyle = readMore ? "show" : "hide"
  const dividerStyle = readMore ? "divider" : "hide"

  return (
    <>
    <div className="postWrap">
      <Header as='h4' className="postTitle" onClick={() => setReadMore(!readMore)}>{ title }</Header>
      <div className="postStatus">
      <div className="postInfo">
        <Label size="small" className="tickerLabel"><Icon name='clock' />{ createdDate }</Label>
        <Label size="small" className="tickerLabel"><Icon name='heart' color='red' />{ upvoteRatio }%</Label>
        <Label size="small" className="tickerLabel"><Icon name='comment' color='grey' />{ numOfComments }</Label>
        <Label size="small" className="tickerLabel"><a href={url} target="_blank" rel="noreferrer">{ subreddit }</a></Label>
      </div>
      <div>
        { TickerLine }
      </div>
      </div>

      <Divider className={dividerStyle} />
      <div className={ readMoreStyle } dangerouslySetInnerHTML={{__html: text}} />
    </div>
    </>
  )
}

export default ListItem
