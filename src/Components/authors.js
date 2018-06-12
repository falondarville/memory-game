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
	        return authors;
		}
	}
	// cycle through images and display them in random order upon click of any image. 
	handleClicked = (event) => {
	// change Clicked on the item from false to true. If Clicked is already true, then the game should reset: points to 0, images shuffle, and Clicked on all items is changed to false. 
		let authors = this.shuffle(this.state.authors);
		this.setState({authors});

		console.log("this was clicked");
	}

	constructor(){
		super();
		this.state = {
			authors
		}
	}

	render(){
		return (
			<div className="row">
				{this.state.authors.map(author => (
			    	<div className="col-sm-3" key={author.id} onClick={this.handleClicked}>
			            <img className="authors" src={author.url} alt={author.alt}/>
			        </div>
			    ))}
		    </div>
		)
	}
}