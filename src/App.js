import React, { useState } from 'react'
import Postform from './components/Postform'
import Postlist from './components/Postlist'
import MyButton from './components/UI/button/MyButton'
import Myinput from './components/UI/input/MyInput'
import Myselect from './components/UI/select/MySelect'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - прога' },
    { id: 2, title: 'Python', body: 'JS - прога' },
    { id: 3, title: 'C++', body: 'JS - прога' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <Postform create={createPost} />
      <div>
        <Myselect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <Postlist remove={removePost} posts={posts} title={'Список постов'} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  )
}

export default App
