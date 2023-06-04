import { configureStore } from '@reduxjs/toolkit'
import tradingviewReducer from './tradingview/tradingviewSlice'

export const store = configureStore({
  reducer: {
    tradingview: tradingviewReducer,
  },
})
