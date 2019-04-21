import React, { useState } from 'react'
import './LoginPage.scss'
import Overlay from './Overlay'
import Forms from './Forms'

import './LoginPage.scss'

export default function LoginPage() {
  const [activeForm, setActiveForm] = useState('')
  return (
    <div className={`container login-page-container ${activeForm}`}>
      <Forms />
      <Overlay onFormSwitchRequest={setActiveForm} />
    </div>
  )
}
