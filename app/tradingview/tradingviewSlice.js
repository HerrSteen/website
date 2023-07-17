import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getInstruments } from './tradingviewApi'

const initialState = {
  status: 'notLoaded',
}

export const loadLatestTrades = createAsyncThunk(
  'tradingview/updateTrades',
  async () => {
    const response = await getInstruments()
    return response.data.instruments
  }
)

export const tradingviewSlice = createSlice({
  name: 'tradingview',
  initialState,
  reducers: {
    updateTrades: (state, action) => {
      state.trades = action.payload
      return state
    }
  },
  extraReducers: {
    [loadLatestTrades.fulfilled]: (state, action) => {
      return { state, trades: action.payload }
    }
  }
})

export const { updateTrades } = tradingviewSlice.actions
export const selectAllTrades = (state) => state.tradingview.trades
export default tradingviewSlice.reducer
