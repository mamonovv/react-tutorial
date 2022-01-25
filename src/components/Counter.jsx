import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  function inc() {
    setCount(count + 1)
  }

  function dec() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  )
}

export default Counter
