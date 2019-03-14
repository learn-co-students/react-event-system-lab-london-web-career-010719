import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  onFocus = () => console.log('Good!')

  onBlur = () => console.log('Hey! Eyes on me!')

 render () {
  return (
    <div>
    <button type="button" onFocus={this.onFocus} onBlur={this.onBlur}>Eyes on Me</button>
    </div>
  )
 }

}
