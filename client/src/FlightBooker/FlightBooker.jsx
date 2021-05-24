import React from 'react';
import dayjs from 'dayjs';
import './FlightBooker.scss';

export default class FlightBooker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          flightType: 'oneway',
          startDate: dayjs().format('DD.MM.YYYY'),
          endDate: dayjs().format('DD.MM.YYYY')
      }
      this.handleFlightTypeChange = this.handleFlightTypeChange.bind(this)
      this.handleBook = this.handleBook.bind(this);
    }

    handleStartDateChange(e) {
        this.setState({startDate: e.target.value})
    }
    handleEndDateChange(e) {
        this.setState({endDate:e.target.value})
    }
    handleFlightTypeChange(e) {
        this.setState({flightType: e.target.value})
    }
    handleBook(e) {
        e.preventDefault();
        let msg;
        if(this.state.flightType === 'oneway') {
            msg = `You have booked a one-way flight for ${this.state.startDate}`
        } else {
            msg = `You have booked return flights on ${this.state.startDate} and ${this.state.endDate}`
        }
        alert(msg);
    }

    //day.js only take in format in YYYY-MM-DD
    dayjsFormat(str) {
        return str.split('.').reverse().join('-')
    }
    
    endDataDisable() {
        return this.state.flightType === 'oneway'
    }
    bookDisable() {
        if (this.state.flightType === 'oneway') return false;
        let start = dayjs(this.dayjsFormat(this.state.startDate));
        let end = dayjs(this.dayjsFormat(this.state.endDate));
        if(start.isAfter(end)) return true;
    }

    isValidDate(dateStr) {
        let isValidDate = dayjs(this.dayjsFormat(dateStr)).isValid();
        let dateArr = dateStr.split('.')
        let isValidFormat = dateArr[0].length === 2 && dateArr[1].length === 2 && dateArr[2].length === 4;
        return isValidDate && isValidFormat
    }

    startValid() {return this.isValidDate(this.state.startDate) ? '' : 'red'};
    endValid() {return !this.endDataDisable() && !this.isValidDate(this.state.endDate) ? 'red' : ''}

    render() {
      return (
        <div id="FlightBooker" className="taskBody">
            <select onChange={this.handleFlightTypeChange} select={this.state.flightType}>
                <option value='oneway'>one-way flight</option>
                <option value='return'>return flight</option>
            </select>
            <input value={this.state.startDate} onChange={e =>{this.handleStartDateChange(e)}} style={{'background': this.startValid.call(this)}}/>
            <input value={this.state.endDate} onChange={e => {this.handleEndDateChange(e)}} disabled={this.endDataDisable.call(this)} style={{'background': this.endValid.call(this)}}/>
            <button onClick={this.handleBook} disabled={this.bookDisable.call(this)}>Book</button>
        </div>
      )
    }
  }