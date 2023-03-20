const getWordCount = () => {
  const value = localStorage.getItem('wordCount')
  if (!value) return 0
  return Number(value)
}

const setWordCount = value => {
  localStorage.setItem('wordCount', value)
}

const loadWordDB = () => {
  const value = localStorage.getItem('wordDB')
  if (!value) return []
  return JSON.parse(value)
}

const setWordDB = value => {
  value = JSON.stringify(value)
  localStorage.setItem('wordDB', value)
}

const setValue = (key, value) => {
  value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

const getValue = (key) => {
  const value = localStorage.getItem(key)
  return JSON.parse(value)
}

export default {
  getValue,
  setValue,
  getWordCount,
  setWordCount,
  loadWordDB,
  setWordDB,
}
