import React, { Component } from 'react'

class Profile extends Component {
  render() {
    console.log(this.props.match.params.name)

    return (
      <div>
        <h1>Profile</h1>
        <p>Bienvenue sur mon profil, mon nom est {this.props.match.params.name}</p>
      </div>
    )
  }
}

export default Profile