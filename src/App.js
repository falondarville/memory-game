import React, { Component } from 'react';
import './App.css';

const authors = [
  {
    id: 1,
    url: window.location.origin + "/images/murakami.png",
    alt: "Murakami"
    clicked: false
  },
  {
    id: 2,
    url: window.location.origin + "/images/austen.png",
    alt: "Austen",
    clicked: false
  },
  {
    id: 3,
    url: window.location.origin + "/images/wells.png",
    alt: "Wells",
    clicked: false
  },
  {
    id: 4, 
    url: window.location.origin + "/images/stevenson.png",
    alt: "Stevenson",
    clicked: false
  },
  {
    id: 5,
    url: window.location.origin + "/images/gilman.png",
    alt: "Gilman", 
    clicked: false
  },
  {
    id: 6,
    url: window.location.origin + "/images/orwell.png",
    alt: "Orwell", 
    clicked: false
  },
  {
    id: 7,
    url: window.location.origin + "/images/hesse.png",
    alt: "Hesse",
    clicked: false
  },
  {
    id: 8
  },
  {
    id: 9
  },
  {
    id: 10
  },
  {
    id: 11
  },
  {
    id: 12
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Memory Game</span>
        </nav>
        <div className="jumbotron">
          <p>Click on an image to begin. The goal of the game is to only click on images that you have not previously clicked on during that game. Don't click the same photo twice!</p>
          <span>Current Score: </span>
          <br />
          <span>Top Score: </span>
        </div>
        <div className="container author-container">
        {/* author images will render here */}
        </div>
      </div>
    );
  }
}

export default App;
