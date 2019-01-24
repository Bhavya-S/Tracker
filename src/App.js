import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import InputWithLabel from './component/InputWithLabel';
import Button from './component/Button';
import List from './component/List';

class App extends Component {
  changeHandler = (e) => {
    let {inputs} =this.props;

    const name = e.target.name;
    const value = e.target.value;
    inputs(name,value);
  }

  clickHandler = () => {
    console.log("After click")
    let {name, ticketNo, assignedTime, addDetails} = this.props;
    if (name.length && ticketNo.length && assignedTime.length){
      let entry = {
        name: name,
        ticketNo: ticketNo,
        assignedTime: assignedTime,
        id :  new Date().getUTCMilliseconds()
      }
      addDetails(entry)
    }
    else {
      alert('All fields are mandatory!')
    }
  }
  render() {
    let {name, ticketNo, assignedTime, entries} = this.props;
    return (
      <div className="App">
        <InputWithLabel id='name' label='Name:' type='text' inputName='name' inputValue={name} placeholder='Enter the name' changeHandler={this.changeHandler}/>
        <InputWithLabel id='ticketNo' label='Ticket No.:' type='text' inputName='ticketNo' inputValue={ticketNo} placeholder='Enter Ticket Number' changeHandler={this.changeHandler}/>
        <InputWithLabel id='assignedTime' label='Time Assigned:' type='number' inputName='assignedTime' inputValue={assignedTime} placeholder='Assign time in hrs(eg.2)' changeHandler={this.changeHandler}/>
        <Button btnName='Enter' clickHandler />
        <div className="displayList">
          <List entries={entries}></List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return{
    inputs: (name,value) => dispatch({type: "INPUT", name, value}),
    addDetails: (entry) => dispatch({type: "ADD", entry})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
