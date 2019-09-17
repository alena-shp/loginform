import React from 'react'
import logo from './fotoLogin/foto.png'
import './Form.scss'

const Form = () => {
  return (
    <div className="wrapper">
      <h2 className="header">
        <img src={logo} alt="" />
        Log-in to your account
      </h2>
      <form className="wrapper-form">
        <div>
          <input placeholder="E-mail address" className="address"/>
        </div>
        <div >
          <input placeholder="Password" className="password"/>
        </div>
        <button className="push">Login</button>
      </form>
      <div className="text-link">
        New to us?
        <a href="#" className="link-up">
          Sign Up
        </a>
      </div>
    </div>
  )
}

export default Form
