import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const Postitem = (props) => {
  const router = useNavigate()
  return (
    <div className="post">
      <div className="post__container">
        <strong>
          {props.post.id}. {props.post.title}.{' '}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default Postitem
