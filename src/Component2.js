import React from 'react'
import { toaster } from 'evergreen-ui'
import { Component1 } from './Component1'

class Component2 extends React.Component {
  constructor() {
    super()
    console.log('hello from component 1')
  }
  render() {
    return <div />
  }
}
