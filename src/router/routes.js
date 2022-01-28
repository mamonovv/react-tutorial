import React from 'react'
import About from '../pages/About'
import Login from '../pages/Login'
import Postidpage from '../pages/PostIdPage'
import Posts from '../pages/Posts'

export const privateRoutes = [
  { path: '/about', componnet: <About /> },
  { path: '/posts', componnet: <Posts /> },
  { path: '/posts/:id', componnet: <Postidpage /> },
]

export const publicRoutes = [{ path: '/login', componnet: <Login /> }]
