import React, { Component } from 'react';

export default class Cell extends Component {
  // use constructor to set INITIAL STATE
  constructor(props) {
    super() // inheriting from another class (req if we're to use this.state)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = {
      color: props.value
    }
  }

  // our increment method makes use of the 'setState' method, which is what we use to alter state
  handleClick = () => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
}

