import React, {Component} from 'react';

class Cell extends React.Component{

  constructor(props){
    super()
    this.state = {
      color: this.props.value
    } // ...define initial state with a key of 'color' set to the 'value' prop
}

  changeColor = (event) => {
          this.setState({
               color: "#F00"
          })
     }

  render() {
    return (
      <div class="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
      </div>
    )
  }
a
}
