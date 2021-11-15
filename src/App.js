import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Characters from './pages/Characters'
import Character from './pages/Character'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      // Component qui permet d'utiliser le router de façon globale
      <BrowserRouter>

        <Nav />

        {/* Component qui représente la liste des routes */}
        <Switch>

          {/* Une route au singulier représente un url spécifique */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/characters/:id" component={Character} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
