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
      <button onClick={(count) => inc(count)}>inc</button>
      <button onClick={(count) => dec(count)}>dec</button>
    </div>
  )
}

export default Counter
