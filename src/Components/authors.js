import React, { Component } from 'react';
import './App.css';

export default class Authors extends Component {
	render() {
    return (
    	// cycle through images and display them in random order upon click of any image. Images should have unique ids to keep track whether or not the image has been previously clicked. 
    	<div className="col-sm">
            <img className="authors" src={window.location.origin + "/images/murakami.png"} alt="Murakami"/>
        </div>
       );
  }
}