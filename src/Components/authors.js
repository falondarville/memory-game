import React from 'react';

// cycle through images and display them in random order upon click of any image. Images should have unique ids to keep track whether or not the image has been previously clicked. 
const Authors = props => (
	<div className="row">
		{props.authors.map(author => (
	    	<div className="col-sm-3">
	            <img key={author.id} className="authors" src={author.url} alt={author.alt}/>
	        </div>
	    ))}
    </div>
);

export default Authors;