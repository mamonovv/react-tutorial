import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import Myinput from './UI/input/MyInput'

const Postform = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <Myinput
        value={post.title}
        type="text"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Название поста"
      />
      <Myinput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default Postform
