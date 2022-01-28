import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Approuter from './components/AppRouter'
import Navbar from './components/UI/navbar/navbar'
import { AuthContext } from './context/context'
import './styles/App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Approuter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
