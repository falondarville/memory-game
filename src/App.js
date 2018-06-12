import React, { Component } from 'react';
import './App.css';
import Authors from './Components/authors.js';

let clickStreak = 0;
let topScore = 0;

export default class App extends Component {

  state = {
    clickStreak,
    topScore
  }

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
