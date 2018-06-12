import React, { Component } from 'react';

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

export default class Authors extends Component {

	shuffle(authors) {
		for(let i = authors.length -1; i > 0; i--){
			const j = Math.floor(Math.random() * (i + 1));
	        [authors[i], authors[j]] = [authors[j], authors[i]];  
		}
		return authors;
	}

	handleClicked = (event) => {
		let authors = this.shuffle(this.state.authors);
		this.setState({authors});

		let clicked = this.state.authors.clicked;
		let clickStreak = this.state.clickStreak

		if(clicked){
			this.setState({ clickStreak: 0 })
			// set all items to clicked: false
			console.log("this was clicked before")
		} else {
			// add one point to clicked counter
			clickStreak ++;
			this.setState({clickStreak});
			console.log("this wasn't clicked before")
		}
	}

	constructor(){
		super();
		this.state = {
			authors,
    		clickStreak: 0,
    		topScore: 0
  		}
	}

	render(){
		return (
			<div>
				<div className="jumbotron-fluid">
			        <div className="row jumbo-row">
			          <div className="col-md-6">
			            <p>Click on an image to begin. The goal of the game is to only click on images that you have not previously clicked on during that game. Don't click the same photo twice!</p>
			          </div>
			          <div className="col-md-6">
			            <p><b>Bonus! Try naming all of the authors.</b></p>
			            <span className="scores">
			            <span>Current Score: {this.state.clickStreak}</span>
			            <br />
			            <span>Top Score: {this.state.topScore}</span>
			            </span>
			          </div>
			          </div>
			       </div>

					<div className="row">
						{this.state.authors.map(author => (
					    	<div className="col-sm-3" key={author.id} onClick={this.handleClicked}>
					            <img className="authors" src={author.url} alt={author.alt}/>
					        </div>
					    ))}
				    </div>
			    </div>
		)
	}
}