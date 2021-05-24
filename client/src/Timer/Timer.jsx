import React from 'react';
import './Timer.scss';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 10,
      elapsed: 0
    };

    this.timer = this.timer.bind(this);
  }

  handledurationChange(e) {
    this.setState({ duration: Number(e.target.value) });
  }

  resetTimer() {
    this.setState({ elapsed: 0 });
  }

  //timer
  timer() {
    let newElapsed = this.state.elapsed + 0.1;
    if (newElapsed <= this.state.duration) {
      this.setState({ elapsed: newElapsed });
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.timer, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id="Timer" className="taskBody">
        <div>
          <span>Elapsed time: </span>
          <progress max={this.state.duration} value={this.state.elapsed} />
        </div>
        <div>
          <span>{this.state.elapsed.toFixed(1)}s</span>
        </div>
        <div id="duration">
          <span>Duration:</span>
          <input
            type="range"
            min={0}
            max={15}
            value={this.state.duration}
            onChange={(e) => {
              this.handledurationChange(e);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            this.resetTimer(e);
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}
