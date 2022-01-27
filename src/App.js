import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import PostService from './components/API/PostService'
import Postfilter from './components/PostFilter'
import Postform from './components/Postform'
import Postlist from './components/Postlist'
import MyButton from './components/UI/button/MyButton'
import Myinput from './components/UI/input/MyInput'
import Loader from './components/UI/Loader/Loader'
import MyModal from './components/UI/MyModal/MyModal'
import Myselect from './components/UI/select/MySelect'
import { usePosts } from './hooks/usePosts'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostLoading, setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Get Posts</MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MyModal>
      <Postfilter filter={filter} setFilter={setFilter} />
      {isPostLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <Postlist
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={'Список постов'}
        />
      )}
    </div>
  )
}

export default App
