import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Approuter from './components/AppRouter'
import Navbar from './components/UI/navbar/navbar'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Approuter />
    </BrowserRouter>
  )
}

export default App
