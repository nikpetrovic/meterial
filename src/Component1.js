import React from 'react'
import { toaster } from 'evergreen-ui'
import ReactDOM from 'react-dom'

class Component1 extends React.Component {
  constructor() {
    super()
    console.log('hello from component 1')
  }
  render() {
    return (
      <div>
        <h1>This is container</h1>
      </div>
    )
  }
}

let initialized = false

const test = (() => {
  console.log('call from test')
  const container = document.createElement('div')
  document.body.appendChild(container)

  ReactDOM.render(<Component1 />, container)

  return {
    success: text => {
      console.log(text)
    },
  }
})()

export { test }
