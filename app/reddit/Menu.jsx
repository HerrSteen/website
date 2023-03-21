import React, { useState } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

const MenuComponent = ({ tickers, filter, setFilter, setSearchWord }) => {
  if (!tickers) return null
  const [inputText, setInputText] = useState()

  const TickerElements = tickers.filter((ticker) => ticker.count > 2).map((ticker) => {
    let color = 'grey'
    if (filter === ticker.ticker) {
      color = 'red'
    }

    return (
      <Menu.Item key={ticker.ticker}
        name={ticker.ticker}
        active={filter === ticker.ticker}
        onClick={() => setFilter(ticker.ticker)}
      >
        <Label color={color} >{ticker.count}</Label>
        {ticker.ticker}
      </Menu.Item>
    )
  })

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      setSearchWord(inputText)
    }
  }

  const onChange = (event) => {
    setInputText(event.target.value)
  }

  return (
    <div className="menu-wrap">
      <Menu vertical size='small'>
        <Menu.Item>
          <Input icon='search' placeholder='Search ticker' onChange={onChange} onKeyPress={keyPressed} value={inputText} />
        </Menu.Item>
        { TickerElements}
      </Menu>
    </div>
  )
}

export default MenuComponent
