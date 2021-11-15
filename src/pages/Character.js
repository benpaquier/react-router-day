import React, { Component } from 'react'

class Character extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      character: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then(response => response.json())
      .then(result => {
        this.setState({ character: result })
      })
  }

  render() {
    const { character } = this.state

    return (
      <div>
        <h1>Page unique de {character.fullName}</h1>
      </div>
    )
  }
}

export default Character