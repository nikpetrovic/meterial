import React from 'react'
import './SignUpForm.scss'

export default function SignUpForm() {
  return (
    <div className="signup-form-container">
      <h4>Sign Up</h4>

      <input name="name" type="text" placeholder="full name" />
      <input name="email" type="text" placeholder="email address" />
      <input name="password" type="password" placeholder="password" />
      <input
        name="reTypePassword"
        type="password"
        placeholder="re-type password"
      />

      <button className="primary">Sign up</button>
    </div>
  )
}
