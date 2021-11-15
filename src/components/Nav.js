import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile/benoit">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/characters">Characters</Link>
        </li>
      </ul>
    )
  }
}

export default Nav