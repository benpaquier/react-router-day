import React from 'react'

import Input from './components/Input'
import Movie from './components/Movie'

class App extends React.Component {
  constructor() {
    super()

    // state initial
    this.state = {
      name: "Benoit",
      age: 20,
      password: "hello",
      grade: 100
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
  }

  handleNameChange(event) {
    console.log(this)
    this.setState({ name: event.target.value })
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleGradeChange = (event) => {
    this.setState({ grade: event.target.value })
  }

  render() {
    const { name, age, password, grade } = this.state

    return (
      <>
        <p>Name: {name}</p>
        <Input
          placeholder="Entrez votre nom"
          type="text"
          handleChange={this.handleNameChange}
          value={this.state.name}
        />

        <p>Age: {age}</p>
        <Input
          placeholder="Entrez un nombre"
          type="number"
          handleChange={this.handleAgeChange}
          value={this.state.age}
        />

        <p>Password: {password}</p>
        <Input
          placeholder="Entrez un mot de passe"
          type="password"
          handleChange={this.handlePasswordChange}
          value={this.state.password}
        />

        <p>Note: {grade}</p>
        <Input
          placeholder="Entrez une note"
          type="range"
          handleChange={this.handleGradeChange}
          value={this.state.grade}
        />


        <Movie
          title="The lord of the rings - The fellowship of the ring"
          year={2001}
        />
      </>
    )
  }
}

export default App
