import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Page inexistante</h1>
        <p>La page que vous cherchez n'existe plus</p>
        <Link className="nav-link" to="/">Retour à la homepage</Link>
      </div>
    )
  }
}

export default NotFound