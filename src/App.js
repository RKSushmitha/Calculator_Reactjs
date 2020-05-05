import React, { Component } from 'react';
import './App.css';
import Keys from './Keys';
import Result from './Result';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      result: ''
    }
  }
  
  handleClick = name => {
    if(name === '=')
    {
      this.calculate()
    }
    else if(name === 'C'){
      this.reset();
    }
    else if(name === 'CE'){
      this.backspace();
    }
    else
    this.setState({
      result : this.state.result + name
    });
  }

    calculate = () =>
    {
      try 
      {
        const finalRes = eval(this.state.result);
        this.setState({
        result : Number.isInteger(finalRes) ? finalRes : finalRes.toFixed(2)
        });
      } 
        catch (error) {
          this.setState({
            result : ""
          });
      }
    }
  
  reset = () => {
    this.setState({
      result : ''
    })
  }
  backspace = () => {
      const myRes = this.state.result;
      if(myRes){
      this.setState({
        result : myRes.toString().slice(0,-1)
    });   
  }
  }
  render(){
  return (
    <div className="App">
      <h3>Calculator</h3>
      <div className = "calci-keypad">
      <Result result = {this.state.result}/>
      <Keys handleClick = {this.handleClick}/>
    </div>
    </div>
    );
}
}
export default App;
