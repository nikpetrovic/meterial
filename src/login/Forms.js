import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import './Forms.scss'

export default function Forms() {
  return (
    <div className="forms-container">
      <LoginForm />
      <SignUpForm />
    </div>
  )
}
