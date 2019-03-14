import React, { Component } from 'react'

export default class Keypad extends Component {

  constructor () {
    super()

  }

  handleKeyUpEvent = () => console.log('Entering password...')

  render () {
    return(
      <div>
      <input type="password" name="password" onKeyUp={this.handleKeyUpEvent} />
      </div>
    )
  }

}
