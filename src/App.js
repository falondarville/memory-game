import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Memory Game</span>
        </nav>
        <div className="jumbotron">
          <p>Click on an image to begin. The goal of the game is to only click on images that you have not previously clicked on during that game. Don't click the same photo twice!</p>
          <span>Current Score: </span>
          <br />
          <span>Top Score: </span>
        </div>
      </div>
    );
  }
}

export default App;
