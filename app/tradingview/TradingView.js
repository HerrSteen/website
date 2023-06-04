import React from 'react'
import useLoadingHook from './useLoadingHook'
import InstrumentBox from './InstrumentBox'
import { selectAllTrades } from './tradingviewSlice'
import { useSelector, useDispatch } from 'react-redux'

const TradingView = () => {
  const loadingStatus = useLoadingHook('/api/get-instruments')
  const trades = useSelector(selectAllTrades)
  const dispatch = useDispatch()

  if (!trades) {
    return <p>trades is undefined</p>
  }

  return <>
    <div className="wrapper">
      {Object.keys(trades).map((key) => {
        const {name, events} = trades[key]
        return <InstrumentBox key={name} name={name} events={events} />
      })}
    </div>
  </>
}

export default TradingView
