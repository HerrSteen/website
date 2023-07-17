import axios from 'axios'

export const getInstruments = () => {
  return axios('/api/get-instruments')
}
