import React, { Component } from "react";
///import Education from "./components/education.js";
import PersonalInfo from './components/personal.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
      },
      education: {
        university: '',
        degree:'',
        subject:'',
      },
      eduList: [],
      
    };   

  };

  handleChangeFirst = (e) => {
    this.setState({
        personal: {firstName: e.target.value,
                   lastName: '',
                   address: '',
                   phoneNumber: '',
                   email: '',
                  }
                });
  };

  handleChangeLast = (e) => {
    this.setState({
      personal: {
        firstName: this.state.personal.firstName,
        lastName: e.target.value,
        address: '',
        phoneNumber: '',
        email: '',
      }
    });
  };

  handleChangeAddress = (e) => {
    this.setState({
      personal: {
        firstName: this.state.personal.firstName,
        lastName: this.state.personal.lastName,
        address: e.target.value,
        phoneNumber: '',
        email: '',
      }
    });
  };

  handleChangeNumber = (e) => {
    this.setState({
      personal: {
        firstName: this.state.personal.firstName,
        lastName: this.state.personal.lastName,
        address: this.state.personal.address,
        phoneNumber: e.target.value, 
        email: '',
      }
    });
  };

  handleChangeEmail = (e) => {
    this.setState({
      personal: {
        firstName: this.state.personal.firstName,
        lastName: this.state.personal.lastName,
        address: this.state.personal.address,
        phoneNumber: this.state.personal.phoneNumber,
        email: e.target.value,
      }
    });
  };


  render() {
    const {personal, education} = this.state;
    return (
    <>
      <div>Start creating you CV below:</div>
      <label>
        <input onChange={this.handleChangeFirst} value={personal.firstName} placeholder='First Name'/>
     </label>
     <label>
        <input onChange={this.handleChangeLast} value={personal.lastName} placeholder='Last Name'/>
     </label>
     <label>
        <input onChange={this.handleChangeAddress} value={personal.address} placeholder='Address'/>
     </label>
     <label>
        <input onChange={this.handleChangeNumber} value={personal.phoneNumber} placeholder='Phone Number'/>
     </label>
     <label>
        <input onChange={this.handleChangeEmail} value={personal.email} placeholder='Email'/>
     </label>
     <hr></hr>
     <div>Add your education below:</div>
     <label>
      <input onChange={this.handleChangeUni} value={education.university}placeholder='University/College'/>
     </label>
     <label>
      <input onChange={this.handleChangeDegree} value={education.degree} placeholder='Degree'/>
     </label>
     <label>
        <input onChange={this.handleChangeSubject} value={education.subject} placeholder='Subject'/>
      </label>




     <PersonalInfo personal={personal}></PersonalInfo>
    </>
    );
  }
}


export default App;
