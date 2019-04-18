import React, { Component, useState } from 'react'
import './LoginPage.scss'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Overlay from './Overlay'
import Forms from './Forms'

export default function LoginPage() {
  const [activeForm, setActiveForm] = useState('')
  return (
    <div className={`container login-page-container ${activeForm}`}>
      <Forms />
      <Overlay onFormSwitchRequest={setActiveForm} />
    </div>
  )
}
