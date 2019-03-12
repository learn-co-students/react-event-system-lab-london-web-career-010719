import React, { Component } from 'react'

class EyesOnMe extends Component {

    keyUpHandler = () => console.log('Entering password...')

    blurHandler = () => console.log('Hey! Eyes on me!')

    focusHandler = () => console.log('Good!')

    render() {
        return (
            <button onBlur={this.blurHandler} onFocus={this.focusHandler}> </button>
        )
    }

}

export default EyesOnMe