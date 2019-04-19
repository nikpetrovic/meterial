import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import QuickNotes from './QuickNotes'
import moment from 'moment'
import Calendar from './Calendar'
import LoginPage from './login/LoginPage'

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    )
  }
}

export default App
