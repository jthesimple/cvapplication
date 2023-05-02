import { Component } from 'react';

class Personal extends Component {
    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: '',       
        }

    };

    handleChangeFirst = (e) => {
        this.setState({
            firstName: e.target.value,
        });
    };

    handleChangeLast = (e) => {
        this.setState({
            lastName: e.target.value,
        });
    };

    handleChangeAddress = (e) =>{
        this.setState({
            address: e.target.value,
        });
    };
    
    handleChangeNumber = (e) =>{
        this.setState({
            phoneNumber: e.target.value,
        });
    };

    handleChangeEmail = (e) =>{
        this.setState({
            email: e.target.value,
        });
    };




    render() {
        const {firstName, lastName, address, phoneNumber, email} = this.state;

      return (<>
      <label>
        <input onChange={this.handleChangeFirst} value={firstName} placeholder='First Name'/>
     </label>
     <label>
        <input onChange={this.handleChangeLast} value={lastName} placeholder='Last Name'/>
     </label>
     <label>
        <input onChange={this.handleChangeAddress} value={address} placeholder='Address'/>
     </label>
     <label>
        <input onChange={this.handleChangeNumber} value={phoneNumber} placeholder='Phone Number'/>
     </label>
     <label>
        <input onChange={this.handleChangeEmail} value={email} placeholder='Email'/>
     </label>
     <hr></hr>

     <h1>{firstName} {lastName} </h1>
     <div>{address}</div>
     <div>{phoneNumber}</div>
     <div>{email}</div>
     
      </>
      );
    }
}


export default Personal;