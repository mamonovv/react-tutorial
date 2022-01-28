import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import Postidpage from '../pages/PostIdPage'

const Approuter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<Postidpage />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  )
}

export default Approuter
