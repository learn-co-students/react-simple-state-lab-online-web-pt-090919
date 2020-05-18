import React from 'react';

export default class Cell extends React.Component{ 
    constructor(props) { 
        
        super(props); 
        this.changeColor = this.changeColor.bind(this)
        this.state = { color: props.value };
    } 
    changeColor(){
        let color = (this.state.color === '#FF0') ? '#333' : '#333' 
        this.setState({color: color})   
    }
    render(){
        return(
            <div className="cell"  
                style={{ backgroundColor: this.state.color }}
            onClick={this.changeColor}
            ></div>
        ) 

        
    }
}