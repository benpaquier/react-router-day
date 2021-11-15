import React, { Component } from 'react'

import Button from '../components/Button'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Bienvenue sur la homepage</p>
        <Button label="Click me" />
      </div>
    )
  }
}

export default Home