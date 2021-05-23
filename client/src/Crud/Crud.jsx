import React from 'react';
import {v4 as uuidv4} from 'uuid';

import './Crud.scss';

import PersonFilter from './PersonFilter.jsx';
import PersonList from './PersonList.jsx';
import PersonForm from './PersonForm.jsx';
import ButtonCommands from './ButtonCommands.jsx';


//can be improved by change persons from array into nested object for faster lookup by id
export default class Crud extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterStr: '',
        persons: [{id:uuidv4(), name:'Emil', surname:'Hans'}, {id:uuidv4(), name:'Mustermann', surname: 'Max'}, {id:uuidv4(), name: 'Tisch', surname: 'Roman'}],
        selectedPersonId: undefined,
        name: '',
        surname: ''
      };

      this.handleFilterStrChange = this.handleFilterStrChange.bind(this);
      this.handleSelectedPersonIdChange = this.handleSelectedPersonIdChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSurnameChange = this.handleSurnameChange.bind(this);
      this.handleCreate = this.handleCreate.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    //helper functions
    findIdPerson(persons, id) {
      return persons.filter(
        (person) => {
          return person.id === id
        }
      )
    }
    findIndex(persons, id) {
      for(let i = 0; i < persons.length; i++) {
        if (persons[i].id === id) return i
      }
    }


    //handle changed

    handleFilterStrChange(e) {
      this.setState({filterStr: e.target.value})
    }

    handleSelectedPersonIdChange(e) {
      let selectedP = this.findIdPerson(this.state.persons, e.target.value)[0];
      this.setState({
        selectedPersonId: selectedP.id,
        name: selectedP.name,
        surname: selectedP.surname
      })
    }

    handleNameChange(e) {
      this.setState({name: e.target.value})
    }
    handleSurnameChange(e) {
      this.setState({surname: e.target.value})
    }


    //handle buttons
    handleCreate() {
      let newPerson = {
        id: uuidv4(),
        name: this.state.name,
        surname: this.state.surname
      }
      let newPersons = this.state.persons.concat(newPerson)
      this.setState({persons: newPersons})
    }

    handleUpdate() {
      let updatedPerson = {
        id: this.state.selectedPersonId,
        name:this.state.name,
        surname: this.state.surname
      }
      let updatedPersons = this.state.persons;
      updatedPersons[this.findIndex(updatedPersons, this.state.selectedPersonId)] = updatedPerson
      this.setState({persons: updatedPersons})
    }

    handleDelete() {
      let personIndex = this.findIndex(this.state.persons, this.state.selectedPersonId)
      let deletedPersons = this.state.persons;
      deletedPersons.splice(personIndex, 1)
      this.setState({persons: deletedPersons, selectedPersonId: undefined})
    }

    render() {
      return (
        <div id="Crud" className="taskBody">
            <PersonFilter filterStr={this.state.filterStr} handleFilterStrChange={this.handleFilterStrChange}/>
            <div id="PersonDisplay">
              <PersonList {...this.state} handleChange={this.handleSelectedPersonIdChange} />
              <PersonForm name={this.state.name} surname={this.state.surname} handleNameChange={this.handleNameChange} handleSurnameChange={this.handleSurnameChange}/>
            </div>
            <ButtonCommands handleCreate={this.handleCreate} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} selectedPersonId={this.state.selectedPersonId} />
        </div>
      )
    }
  }