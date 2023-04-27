import axios from 'axios'
import { useState, useEffect } from 'react'


const useLoadingHook = (url) => {
    const [loadedData, setLoadedData] = useState()
    const [status, setStatus] = useState()

    useEffect(() => {
        try {
            //load data
            axios(url).then(result => {
                const { data } = result
                setLoadedData(data)
                setStatus('loaded')
            })
        } catch (e) {
            setStatus('error')
        }
    }, [url])

    return [loadedData, status]
}

export default useLoadingHook
