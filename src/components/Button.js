import React from 'react'

class Button extends React.Component {
  componentDidMount() {
    console.log("componentDidMont Button.js")
  }

  render() {
    console.log("render Button.js")

    return (
      <button>Hello</button>
    )
  }
}

export default Button
