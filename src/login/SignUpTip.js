import React from 'react'
import './SignUpTip.scss'

export default function SignUpTip(props) {
  return (
    <div className="signup-tip-container">
      <h4>This is sign up tip</h4>
      <button
        className="secondary"
        onClick={() => {
          props.onFormSwitchRequest('signup-active')
        }}
      >
        Signup
      </button>
    </div>
  )
}
