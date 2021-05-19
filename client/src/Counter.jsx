import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count : 0}
    }
    
    countUp = () => {
      this.setState(prevState => {
        return {count : prevState.count + 1}
      })
    }
    
    render() {
      return (
        <div id="counter">
          <div id="countDisplay">{this.state.count}</div>
          <button onClick={this.countUp.bind(this)}>Count</button>
        </div>
      )
    }
  }

