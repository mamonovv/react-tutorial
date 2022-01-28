import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { privateRoutes, publicRoutes } from '../router/routes'

const Approuter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log(isAuth)
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.componnet} key={route.path} />
      ))}
      <Route path="*" element={<Navigate replace to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.componnet} key={route.path} />
      ))}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  )
}

export default Approuter
