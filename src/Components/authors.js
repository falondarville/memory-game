import React from 'react';

// cycle through images and display them in random order upon click of any image. 
const handleClicked = (event) => {
	// change Clicked on the item from false to true. If Clicked is already true, then the game should reset: points to 0, images shuffle, and Clicked on all items is changed to false. 
	alert("this was clicked");
	function shuffle(authors) {
	for(let i = authors.length -1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
        [authors[i], authors[j]] = [authors[j], authors[i]];
		}
	shuffle(authors);
	}
}

// use shuffle function and map through shuffled authors array
const Authors = props => (
	<div className="row">
		{props.authors.map(author => (
	    	<div className="col-sm-3" key={author.id} onClick={handleClicked}>
	            <img className="authors" src={author.url} alt={author.alt}/>
	        </div>
	    ))}
    </div>
);

export default Authors;