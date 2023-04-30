import React from 'react'
import useLoadingHook from './useLoadingHook'
import InstrumentBox from './InstrumentBox'

const TradingView = () => {
  const [loadedData, status] = useLoadingHook('/api/get-instruments')

  if (status === 'loading') {
    return <p>Loading</p>
  }

  if (status === 'error' || (!loadedData || !loadedData.instruments)) {
    return <p>Error</p>
  }

  return <>
    <div className="wrapper">
      {loadedData && loadedData.instruments.map((instrument) => {
        return <InstrumentBox key={instrument.name} instrument={instrument} />
      })}
    </div>
  </>
}

export default TradingView
