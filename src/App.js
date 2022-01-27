import React, { useMemo, useState } from 'react'
import Postfilter from './components/PostFilter'
import Postform from './components/Postform'
import Postlist from './components/Postlist'
import MyButton from './components/UI/button/MyButton'
import Myinput from './components/UI/input/MyInput'
import MyModal from './components/UI/MyModal/MyModal'
import Myselect from './components/UI/select/MySelect'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - прога' },
    { id: 2, title: 'Python', body: 'JS - прога' },
    { id: 3, title: 'C++', body: 'JS - прога' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

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
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MyModal>
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
