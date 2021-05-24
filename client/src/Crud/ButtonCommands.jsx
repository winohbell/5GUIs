import React from 'react';

export default class ButtonCommands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="ButtonCommands">
        <button onClick={this.props.handleCreate}>Create</button>
        <button onClick={this.props.handleUpdate} disabled={!this.props.selectedPersonId}>
          Update
        </button>
        <button onClick={this.props.handleDelete} disabled={!this.props.selectedPersonId}>
          Delete
        </button>
      </div>
    );
  }
}
