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
  const [serchQuery, setSerchQuery] = useState('')

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }

  const sortedPosts = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <Postform
        onChange={(e) => setSerchQuery(e.target.value)}
        value={serchQuery}
        create={createPost}
      />
      <div>
        <Myinput placeholder="Поиск..." />
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
        <Postlist
          remove={removePost}
          posts={sortedPosts}
          title={'Список постов'}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  )
}

export default App
