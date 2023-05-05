import React, { Component } from "react";
import Education from "./components/education.js";
import PersonalInfo from './components/personal.js';
import Work from "./components/work.js";
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
      experience: {
        company:'',
        position: '',
        tenure: '',
        details:'',
        id: uniqid(),
      },
      eduList: [],
      workExperience: [],
      
    };   

    this.onClickAddBtn = this.onClickAddBtn.bind(this);

    this.onClickAddWork = this.onClickAddWork.bind(this);

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

  handleChangeCompany = (e) => {
    this.setState({
      experience:{
        company: e.target.value,
        position: '',
        tenure: '',
        details:'',
        id: this.state.experience.id,

      }
    })
  };

  handleChangePosition = (e) => {
    this.setState({
      experience:{
        company: this.state.experience.company,
        position: e.target.value,
        tenure: '',
        details:'',
        id: this.state.experience.id,

      }
    })
  };

  handleChangeTenure = (e) => {
    this.setState({
      experience:{
        company: this.state.experience.company,
        position: this.state.experience.position,
        tenure: e.target.value,
        details:'',
        id: this.state.experience.id,

      }
    })
  };

  handleChangeDetails = (e) => {
    this.setState({
      experience:{
        company: this.state.experience.company,
        position: this.state.experience.position,
        tenure: this.state.experience.tenure,
        details: e.target.value,
        id: this.state.experience.id,

      }
    })
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

  onClickAddWork = (e) => {
    e.preventDefault();
    this.setState({
      workExperience: this.state.workExperience.concat(this.state.experience),
      experience: {
        company: '',
        position: '',
        tenure: '',
        details: '',
        id:uniqid()
      },

    });

  }

  removeEducation = (id) => {
    const updatedEduList = this.state.eduList.filter((edu)=> edu.id !==id);
    this.setState({eduList: updatedEduList});
    

  };

  removeWork = (id) => {
    const updatedWorkList = this.state.workExperience.filter((work)=>work.id !==id);
    this.setState({workExperience: updatedWorkList});
  }




  render() {
    const {personal, education, eduList, experience, workExperience} = this.state;
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
      <hr></hr>
      <form onSubmit={this.onClickAddWork}>
        <label>
          <input onChange={this.handleChangeCompany} value={experience.company} placeholder='Company Name'/>
        </label>
        <label>
          <input onChange={this.handleChangePosition} value={experience.position} placeholder='Position'/>
        </label>
        <label>
          <input onChange={this.handleChangeTenure} value={experience.tenure} placeholder='Tenure'/>
        </label>
        <label>
          <input onChange={this.handleChangeDetails} value={experience.details} placeholder='Details'/>
        </label>
        <button type='submit'>Add</button>
      </form>
      <hr></hr>

     <PersonalInfo personal={personal}></PersonalInfo>
     <h2>Education</h2>
     <Education list={eduList} remove={this.removeEducation}></Education>
     <h2>Work Experience</h2>
     <Work workList={workExperience} remove={this.removeWork}></Work>
     
     
    </>
    );
  }
}


export default App;
