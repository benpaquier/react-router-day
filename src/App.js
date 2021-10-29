import React from 'react'

import Form from './components/Form'

class App extends React.Component {
  handleFocus(e) {
    console.log("handleFocus")
  }

  handleChange(e) {
    console.log(`handleChange ${e.target.value}`)
  }

  handleBlur(e) {
    console.log("handleBlur")
  }

  handleSubmit(e) {
    // Obligatoire
    e.preventDefault()
    console.log("handleSubmit")
  }

  handleKeyPress(e) {
    console.log(`handleKeyPress ${e.key}`)
  }

  handleKeyDown(e) {
    console.log(`handleKeyDown ${e.key}`)
  }

  handleKeyUp(e) {
    console.log(`handleKeyUp ${e.key}`)
  }

  render() {
    return (
      <>
        <h1>App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="My awesome input"
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onKeyPress={this.handleKeyPress}
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.handleKeyUp}
          />
          <button type="submit">Submit</button>
        </form>
        <Form />
      </>
    )
  }
}

export default App
