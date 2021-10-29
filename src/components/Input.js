import React from 'react'

class Input extends React.Component {
  render() {
    const { type, placeholder, onChange } = this.props

    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    )
  }
}

export default Input
