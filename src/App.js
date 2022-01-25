import React, { useState } from 'react'
import Counter from './components/Counter'
import Postitem from './components/PostItem'
import Postlist from './components/Postlist'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', desc: 'JS - прога' },
    { id: 2, title: 'Python', desc: 'JS - прога' },
    { id: 3, title: 'C++', desc: 'JS - прога' },
  ])

  return (
    <div className="App">
      <Postlist posts={posts} title={'Список постов'} />
    </div>
  )
}

export default App
