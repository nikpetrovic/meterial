import React from 'react'
import './LoginForm.scss'

export default function LoginForm() {
  return (
    <div className="login-form-container">
      <h4>Login</h4>

      <input name="email" type="text" placeholder="email address" />
      <input name="password" type="password" placeholder="password" />

      <button className="primary">Login</button>
    </div>
  )
}
