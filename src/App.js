import React, { useMemo, useState } from 'react'
import Postfilter from './components/PostFilter'
import Postform from './components/Postform'
import Postlist from './components/Postlist'
import Myinput from './components/UI/input/MyInput'
import Myselect from './components/UI/select/MySelect'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - прога' },
    { id: 2, title: 'Python', body: 'JS - прога' },
    { id: 3, title: 'C++', body: 'JS - прога' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <Postform create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <Postfilter filter={filter} setFilter={setFilter} />
      <Postlist
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Список постов'}
      />
    </div>
  )
}

export default App
