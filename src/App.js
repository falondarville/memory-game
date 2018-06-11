import React from 'react';
import './App.css';
import Authors from './Components/authors.js';

// authors rendered to page
const authors = [
  {
    id: 1,
    url: window.location.origin + "/images/murakami.png",
    alt: "Murakami",
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
    id: 8,
    url: window.location.origin + "/images/wilde.png",
    alt: "Wilde",
    clicked: false
  },
  {
    id: 9,
    url: window.location.origin + "/images/joyce.png",
    alt: "Joyce",
    clicked: false
  },
  {
    id: 10,
    url: window.location.origin + "/images/marx.png",
    alt: "Marx",
    clicked: false
  },
  {
    id: 11,
    url: window.location.origin + "/images/angelou.png",
    alt: "Angelou",
    clicked: false
  },
  {
    id: 12,
    url: window.location.origin + "/images/frank.png",
    alt: "Frank",
    clicked: false
  }
];

const App = () => (
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
            <span>Current Score: </span>
            <br />
            <span>Top Score: </span>
          </div>
          </div>
        </div>
        <div className="container">
            {/* author images will render here */}
            <Authors authors={authors}/>
        </div>
      </div>
);

export default App;
