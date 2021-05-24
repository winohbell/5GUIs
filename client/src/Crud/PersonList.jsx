import React from 'react';

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterPersons(persons, filterStr) {
    return persons.filter((person) => {
      return person.surname.toLowerCase().startsWith(filterStr.toLowerCase());
    });
  }

  render() {
    return (
      <div id="PersonList">
        <select size={5} onChange={this.props.handleChange} value={this.props.selectedPersonId}>
          {this.filterPersons(this.props.persons, this.props.filterStr).map((person) => {
            return (
              <option
                key={person.id}
                value={person.id}
              >{`${person.surname}, ${person.name}`}</option>
            );
          })}
        </select>
      </div>
    );
  }
}
