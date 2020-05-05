import React, { Component } from 'react';

class Keys extends Component {
   
    handleClick= event =>{
        this.props.handleClick(event.target.name);
    };    
    render(){
        return (
            <div className = "buttons">
                <button name = "C" onClick = {this.handleClick}>
                    C
                </button>
                <button name = "CE" onClick = {this.handleClick}>
                    CE
                </button>
                <button name = "%" onClick = {this.handleClick}>
                    %
                </button>
                <button name = "/" onClick = {this.handleClick} className = "actions">
                    ÷
                </button>
                <button name = "7" onClick = {this.handleClick}>
                    7
                </button>
                <button name = "8" onClick = {this.handleClick}>
                    8
                </button>
                <button name = "9" onClick = {this.handleClick}>
                    9
                </button>
                <button name = "*" onClick = {this.handleClick} className = "actions">
                    *
                </button>
                <button name = "4" onClick = {this.handleClick}>
                    4
                </button> 
                <button name = "5" onClick = {this.handleClick}>
                    5
                </button>
                <button name = "6" onClick = {this.handleClick}>
                    6
                </button>
                <button name = "-" onClick = {this.handleClick} className = "actions">
                    -
                </button>
                <button name = "1" onClick = {this.handleClick}>
                    1
                </button>
                <button name = "2" onClick = {this.handleClick}>
                    2
                </button>
                <button name = "3" onClick = {this.handleClick}>
                    3
                </button>
                <button name = "+" onClick = {this.handleClick} className = "actions">
                    +
                </button>
                <button name = "." onClick = {this.handleClick}>
                    .
                </button>
                <button name = "0" onClick = {this.handleClick}>
                    0
                </button>
                <button name = "=" onClick = {this.handleClick} className = "actions" id = "equal">
                    =
                </button>
            </div>
        )
    }
}

export default Keys;