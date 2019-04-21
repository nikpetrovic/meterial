import React from 'react'
import './Forms.scss'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function Forms() {
  return (
    <div className="forms-container">
      <LoginForm />
      <SignUpForm />
    </div>
  )
}
