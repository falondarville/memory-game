import React, { Component } from 'react';
import './App.css';
import Authors from './Components/authors.js';

export default class App extends Component {

  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Memory Game</span>
        </nav>
        <div className="container">
            {/* author images will render here */}
            <Authors />
        </div>
      </div>
      )
  }
}
