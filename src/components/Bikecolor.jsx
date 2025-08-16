import React, { Component } from "react";

class Bikecolor extends Component {
    constructor(){
        super();
        this.state = {color:"Grey", model: "classic 350"}
    }
    
    render() {
        return (
            <>
                <h1> My bike color is {this.state.color} and model is {this.state.model}</h1>
                <button onClick={() => {this.setState((prevState) => {return {...prevState, color: "black"}})}}> Change Color</button>
            </>
        )
    }
}

export default Bikecolor;