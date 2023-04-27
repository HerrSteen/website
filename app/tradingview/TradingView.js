import React from 'react'
import useLoadingHook from './LoadingHook'

const TradingView = () => {
    const [loadedData, status] = useLoadingHook('/api/instruments-status')
    // const { instruments } = loadedData

    console.log('instruments', loadedData)


    return <p>tradingview component</p>
}

export default TradingView
