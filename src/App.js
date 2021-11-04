import React from 'react'

import Button from "./components/Button"

class App extends React.Component {
  constructor() {
    super()

    //state initial
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(result => {
        this.setState({ pokemons: result.results })
      })
  }

  render() {
    return (
      <>
        <h1>App</h1>
        <Button />
        {this.state.pokemons.map(pokemon => (
          <p key={pokemon.name}>{pokemon.name}</p>
        ))}
      </>
    )
  }
}

export default App
