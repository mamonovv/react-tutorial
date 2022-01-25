import React from 'react'

const Postitem = (props) => {
  return (
    <div className="post">
      <div className="post__container">
        <strong>
          {props.post.id}. {props.post.title}.{' '}
        </strong>
        <div>{props.post.desc}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default Postitem
