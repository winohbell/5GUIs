import React from 'react';

export default class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="PersonForm">
        <label htmlFor="name">name:</label>
        <input type="text" value={this.props.name} onChange={this.props.handleNameChange} />
        <label htmlFor="surname">surname:</label>
        <input type="text" value={this.props.surname} onChange={this.props.handleSurnameChange} />
      </div>
    );
  }
}
