import React from 'react'
import classes from './MyInput.module.css'

const Myinput = (props) => {
  return <input className={classes.myInput} {...props} />
}

export default Myinput
