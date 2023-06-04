import axios from 'axios'
import { useState, useEffect } from 'react'

import { selectAllTrades, updateTrades } from './tradingviewSlice'
import { useSelector, useDispatch } from 'react-redux'

const useLoadingHook = (url) => {
  const [status, setStatus] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      axios(url).then(result => {
        const { data } = result
        setStatus('loaded')
        dispatch(updateTrades(data.instruments))
      })
    } catch (e) {
      setStatus('error')
    }
  }, [url])

  return status
}

export default useLoadingHook
