import React, { Component } from 'react';

export default class Cell extends Component {
  constructor (props) {
    super()
    this.state = {
      color: value
    }
  }
  
  colorChanger = () => {
    this.setState = {
      color: '#333'
    }
  }
  
  render(){
    return (
    <div className="cell" style={{backgroundColor: '#FFF'}} onClick={this.colorChanger}>
    </div>  
    )
  }
}