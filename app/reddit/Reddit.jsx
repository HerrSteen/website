import React, { useEffect, useState } from 'react'
import { Label, Icon } from 'semantic-ui-react'
import axios from 'axios'
import Post from './Post'
import Menu from './Menu'
import Loading from './Loading'

function Index() {
  const [posts, setPosts] = useState([])
  const [tickers, setTickers] = useState([])
  const [filter, setFilterTemp] = useState()
  const [searchWord, setSearchWord] = useState()

  const setFilter = (value) => {
    if (filter === value) return setFilterTemp()
    setFilterTemp(value)
  }

  const loadSearchResult = async (word) => {
    const result = await axios(`/api/reddit/${word}`)
    console.log('result.data.posts', result.data)
    setPosts(result.data)
  }

  const loadPosts = async () => {
    const result = await axios('/api/reddit-posts')
    setPosts(result.data.posts)
    setTickers(result.data.tickers)
  }

  useEffect(() => {
    if (!searchWord) return
    setPosts([])
    setFilterTemp()
    loadSearchResult(searchWord)
  }, [searchWord])

  const clearSearch = () => {
    setSearchWord(null)
    setPosts([])
    loadPosts()
  }

  useEffect(() => loadPosts(), [])

  if (!posts.length) {
    return <Loading />
  }

  return (
    <div>
      <div className="wrapper">
        <Menu tickers={tickers} filter={filter} setFilter={setFilter} setSearchWord={setSearchWord} />
        <div className="postWrap">
        { searchWord && <Label className="searchLabel">{searchWord}<Icon name='delete' onClick={clearSearch} />
        </Label> }
        {posts.map((item) => <Post item={item} filter={filter} setFilter={setFilter} key={item.title} />)}
        </div>

      </div>
    </div>
  )
}

export default Index
