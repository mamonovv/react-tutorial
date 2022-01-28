import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import Myinput from '../components/UI/input/MyInput'
import { AuthContext } from '../context/context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Страница авторизации</h1>
      <form onSubmit={login}>
        <Myinput type="text" placeholder="Введите логин" />
        <Myinput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
