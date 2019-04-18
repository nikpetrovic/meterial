import React from 'react'
import './Overlay.scss'
import LoginTip from './LoginTip'
import SignUpTip from './SignUpTip'

export default function Overlay(props) {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <LoginTip onFormSwitchRequest={props.onFormSwitchRequest} />
        <SignUpTip onFormSwitchRequest={props.onFormSwitchRequest} />
      </div>
    </div>
  )
}
