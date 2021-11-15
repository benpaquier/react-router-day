import React, { Component } from 'react'

import Button from '../components/Button'

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Bienvenue sur la page about</p>
        <Button label="Click me about" />
      </div>
    )
  }
}

export default About