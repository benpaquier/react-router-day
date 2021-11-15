import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Characters extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(result => {
        this.setState({ characters: result })
      })
  }

  render() {
    const { characters } = this.state

    return (
      <div>
        {characters.map(character => (
          <Link
            key={`${character.fullName}-${character.id}`}
            to={`/characters/${character.id}`}
          >
            <p>{character.fullName}</p>
          </Link>
        ))}    
      </div>
    )
  }
}

export default Characters
