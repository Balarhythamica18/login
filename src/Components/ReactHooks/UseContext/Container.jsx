import React from 'react'
import Student from './Student'
import { useContext } from 'react'
import { ThemeContext } from './Main'

const Container = () => {
  const{message}=useContext(ThemeContext)
  return (
    <div>
      <hr/>
        <h1>Container</h1>
        <p>{message}</p>
        <Student />
    </div>
  )
}

export default Container