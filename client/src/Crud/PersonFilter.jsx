import React from 'react';

export default class PersonFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="PersonFilter">
        <label htmlFor="filterStr">Filter prefix:</label>
        <input
          type="text"
          value={this.props.filterStr}
          onChange={this.props.handleFilterStrChange}
        />
      </div>
    );
  }
}
