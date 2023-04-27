import React from 'react'
import Editor from './editor/Editor'
import Reddit from './reddit/Reddit'
import TradingView from './tradingview/TradingView'

export default class Router extends React.Component {
  render() {
    const route = window.reactData.route
    if (route === 'editor') {
      return <Editor />
    }

    if (route === 'reddit') {
      return <Reddit />
    }

    if (route === 'tradingview') {
      return <TradingView />
    }
  }
}
