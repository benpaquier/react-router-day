import React from 'react'

import Input from './Input'
import Button from './Button'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: ""
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginTop: '50px'}}>
        <Input
          type="text"
          placeholder="your@email.com"
          onChange={this.handleEmailChange}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={this.handlePasswordChange}
        />
        <Button
          type="submit"
          label="Submit"
        />
      </form>
    )
  }
}

export default Form
