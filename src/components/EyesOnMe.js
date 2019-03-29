import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props)
  };

  handleOnFocus = (e) => {
    console.log('Good!');
  }

  handleOnBlur = (e) => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}>
        Button
      </button>
    );
  }
};
