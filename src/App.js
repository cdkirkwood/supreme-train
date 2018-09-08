import React, { Component } from 'react'
import './App.css'
import { Header, NavBar } from './features'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
      </div>
    )
  }
}

export default App
