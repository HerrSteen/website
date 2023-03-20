import React from 'react'
import Editor from './editor/Editor'

export default class Router extends React.Component {
  render() {
    const route = window.reactData.route
    if (route === 'editor') {
      return <Editor />
    }
  }
}
