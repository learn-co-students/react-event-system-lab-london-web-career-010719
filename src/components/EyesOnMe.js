// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnME extends Component {

  handleBlur = () => {

    console.log('Hey! Eyes on me!')
  }

  handleFocus = () => {

    console.log('Good!')
  }


	render() {
		return (
    <button
    onBlur={this.handleBlur}
    onFocus={this.handleFocus}
     type="button">
    Eyes on ME!
    </button>
    )
	}
}
