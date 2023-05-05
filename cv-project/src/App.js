import React, { Component } from "react";
import Education from "./components/education.js";
import PersonalInfo from './components/personal.js';
import uniqid from "uniqid";

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
        id: uniqid(),
      },
      eduList: [],
      
    };   

    this.onClickAddBtn = this.onClickAddBtn.bind(this);

    this.removeEducation = this.removeEducation.bind(this);


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

  handleChangeUni = (e) => {
    this.setState({
        education: {
          university: e.target.value,
          degree: '',
          subject: '',
          id: this.state.education.id ,
        },
    });
  };

  handleChangeDegree = (e) => {
    this.setState({
      education: {
        university: this.state.education.university,
        degree: e.target.value,
        subject: '',
        id: this.state.education.id,
      },
    });
  }; 

  handleChangeSubject = (e) => {
    this.setState({
      education: {
        university: this.state.education.university,
        degree: this.state.education.degree,
        subject: e.target.value,
        id: this.state.education.id,
      }
    });
  };

  onClickAddBtn = (e) => {
    e.preventDefault();
    this.setState({
        eduList: this.state.eduList.concat(this.state.education),
        education: {
          university: '', 
          degree: '', 
          subject: '', 
          id: uniqid()
        },
      });
  };

  removeEducation = (id) => {
    const updatedEduList = this.state.eduList.filter((edu)=> edu.id !==id);
    this.setState({eduList: updatedEduList});
    

  };




  render() {
    const {personal, education, eduList} = this.state;
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
     <form onSubmit={this.onClickAddBtn}>
      <label>
        <input onChange={this.handleChangeUni} value={education.university}placeholder='University/College'/>
      </label>
      <label>
        <input onChange={this.handleChangeDegree} value={education.degree} placeholder='Degree'/>
      </label>
      <label>
          <input onChange={this.handleChangeSubject} value={education.subject} placeholder='Subject'/>
        </label>
        <button type='submit'>Add</button>
      </form>

     <PersonalInfo personal={personal}></PersonalInfo>
     <h2>Education</h2>
     <Education list={eduList} remove={this.removeEducation}></Education>
     
     
    </>
    );
  }
}


export default App;
