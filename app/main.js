import React from 'react'
import { render } from 'react-dom'
import Router from './Router'
import {store} from './store'
import {Provider} from 'react-redux'
const root = document.querySelector('.main')

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  root
)
