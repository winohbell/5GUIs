import React from 'react';
import './Counter.scss';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  countUp = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div id="Counter" className="taskBody">
        {/* <div id="countDisplay" className="inputDisplay">{this.state.count}</div> */}
        <input value={this.state.count} readOnly />
        <button onClick={this.countUp.bind(this)}>Count</button>
      </div>
    );
  }
}
