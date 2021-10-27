import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        type={this.props.type}
        onChange={this.props.handleChange}
        value={this.props.value}
      />
    )
  }
}

export default Input
