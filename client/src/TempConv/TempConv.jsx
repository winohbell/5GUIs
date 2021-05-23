import React from 'react';
import './TempConv.scss';

export default class TempConv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: ''
    }
  }
  
  toC = f => {return (f - 32) * 5 / 9};
  toF = c => {return (c * 9 / 5 + 32)};
  
  handleCelChange = (e) => {
    this.setState({celsius: e.target.value});
    if(!!parseFloat(e.target.value) || e.target.value === '0') {
      this.setState({fahrenheit: Math.round(this.toF(parseFloat(e.target.value))).toString()})
    };
  }
  
  handleFehChange = (e) => {
    this.setState({fahrenheit: e.target.value});
    if(!!parseFloat(e.target.value) || e.target.value === '0') {
      this.setState({celsius: Math.round(this.toC(parseFloat(e.target.value))).toString()})
    };
  }
  
  render() {
    return (
      <div id="TempConv" className="taskBody">
        <input type="text" className="celInput" value={this.state.celsius} onChange={this.handleCelChange}></input>
        <span>Celsius = </span>
        <input type="text" className="fahInput" value={this.state.fahrenheit} onChange={this.handleFehChange}></input>
        <span>Fahrenheit</span>
      </div>
    )
  }
}

  