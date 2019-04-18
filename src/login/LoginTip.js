import React from 'react'
import './LoginTip.scss'

export default function LoginTip(props) {
  return (
    <div className="login-tip-cantainer">
      <h4>This is login tip</h4>
      <button
        className="secondary"
        onClick={() => {
          props.onFormSwitchRequest('login-active')
        }}
      >
        Signup
      </button>
    </div>
  )
}
