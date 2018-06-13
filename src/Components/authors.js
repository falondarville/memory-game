import React, { Component } from 'react';

// authors rendered to page
const authors = [
  {
    id: 1,
    // url: require("/images/murakami.png",
    url: require("../images/murakami.png"),
    alt: "Murakami"
  },
  {
    id: 2,
    url: require("../images/austen.png"),
    alt: "Austen"
  },
  {
    id: 3,
    url: require("../images/wells.png"),
    alt: "Wells"
  },
  {
    id: 4, 
    url: require("../images/stevenson.png"),
    alt: "Stevenson"
  },
  {
    id: 5,
    url: require("../images/gilman.png"),
    alt: "Gilman"
  },
  {
    id: 6,
    url: require("../images/orwell.png"),
    alt: "Orwell"
  },
  {
    id: 7,
    url: require("../images/hesse.png"),
    alt: "Hesse"
  },
  {
    id: 8,
    url: require("../images/wilde.png"),
    alt: "Wilde"
  },
  {
    id: 9,
    url: require("../images/joyce.png"),
    alt: "Joyce"
  },
  {
    id: 10,
    url: require("../images/marx.png"),
    alt: "Marx"
  },
  {
    id: 11,
    url: require("../images/angelou.png"),
    alt: "Angelou"
  },
  {
    id: 12,
    url: require("../images/frank.png"),
    alt: "Frank"
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

	handleClicked = (id) => {
		// this rearranges the authors when an author is clicked
		let authors = this.shuffle(this.state.authors);
		this.setState({ authors });

		// this is meant to get the Clicked value of the current author, used to add logic to the if/else function
		let clickStreak = this.state.clickStreak;

		// change if statement to check if image is in the clicked images array instead of clicked since clicked is no longer in the objects
    let checkAuthor = this.state.clickedArray.find(function(element){
        return element.id === id;})
    // if author is in the clickedArray, then run if
		if(checkAuthor){ 
			this.setState({ clickStreak: 0, clickedArray: [] });
			// store total points from clickStreak and put them into an array. Then grab the largest number in the array and display it.
      this.state.topScoreArray.push(this.state.clickStreak);
      this.state.topScore = Math.max(...this.state.topScoreArray);
		} else {
      // if image was not clicked before, add image to clickedArray
      let currentAuthor = this.state.authors.find(function(element){
        return element.id === id;})

      this.state.clickedArray.push(currentAuthor);
			clickStreak ++;
			this.setState({ clickStreak });
		}
	}

	constructor(){
		super();
		this.state = {
			authors,
    		clickStreak: 0,
    		topScore: 0,
        topScoreArray: [],
        clickedArray: []
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
					    	<div className="col-sm-3" key={author.id} onClick={() => this.handleClicked(author.id)}>
					            <img className="authors" src={author.url} alt={author.alt}/>
					        </div>
					    ))}
				    </div>
			    </div>
		)
	}
}