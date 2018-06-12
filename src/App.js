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
        <div className="jumbotron">
        <div className="row">
          <div className="col-md-6">
            <p>Click on an image to begin. The goal of the game is to only click on images that you have not previously clicked on during that game. Don't click the same photo twice!</p>
          </div>
          <div className="col-md-6">
            <p><b>Bonus! Try naming all of the authors.</b></p>
            <span>Current Score: {this.state.clickStreak}</span>
            <br />
            <span>Top Score: {this.state.topScore}</span>
          </div>
          </div>
        </div>
        <div className="container">
            {/* author images will render here */}
            <Authors />
        </div>
      </div>
      )
  }
}
