import { Component } from 'react';
import uniqid from "uniqid";


class Education extends Component {
    constructor(){
        super();

        this.state = {
            education: {university: '', 
                        degree: '', 
                        subject: '',
                        id: uniqid(),
                    },
            eduList: [],

        };

        this.onClickAddBtn = this.onClickAddBtn.bind(this);

    };

    handleChangeUni = (e) => {
        this.setState({
            education: {university: e.target.value,
                        degree: '',
                        subject: '',
                        id: '' ,
            },
        });
    };

    handleChangeDegree = (e) => {
        this.setState({
            education: {university: this.state.education.university,
                        degree: e.target.value,
                        subject: '',
                        id: '' ,
            },
        });
    };

    handleChangeSubject = (e) => {
        this.setState({
            education: {university: this.state.education.university,
                        degree: this.state.education.degree,
                        subject: e.target.value,
                        id: this.state.education.id,
            },
        });
    };

    onClickAddBtn = (e) => {
        e.preventDefault();
        this.setState({
            eduList: this.state.eduList.concat(this.state.education),
            education: {university: '', degree: '', subject: '', id: uniqid()},
        });
    };




    render(){
        const {education, eduList} = this.state;
        
        return(
            <>
            <label>
                <input onChange={this.handleChangeUni} value={education.university ||''} placeholder='University/College'/>
            </label>
            <label>
                <input onChange={this.handleChangeDegree} value={education.degree ||''} placeholder='Degree'/>
            </label>
            <label>
                <input onChange={this.handleChangeSubject} value={education.subject ||''} placeholder='Subject'/>
            </label>
            <button onClick={this.onClickAddBtn} type='submit'>Add</button>
            <h2>Education</h2>
            <ul>
                {eduList.map((education) => {
                    return (<>
                    <ul>
                        <li key={education.id}>
                          <div>{education.university}</div>
                          <div>{education.degree} {education.subject}</div>
                        </li>
                    </ul>
                    </>
                    )
                })}
            </ul> 
            </>
        );
    }
};







export default Education;