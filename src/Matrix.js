import React, { Component } from 'react';
import { pattern1 } from './data';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: pattern1.map(pattern => pattern.map(item => item.replace(item, "#F00")))
}