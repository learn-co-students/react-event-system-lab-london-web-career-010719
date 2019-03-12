import React, {Component} from 'react'

class Keypad extends Component {

    keyUpHandler = () => console.log('Entering password...')

    render(){
        return(
            <input onKeyUp={this.keyUpHandler} type="password" />
        )
    }

}

export default Keypad