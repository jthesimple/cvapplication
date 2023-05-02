import { Component } from 'react';

class Education extends Component {
    constructor(){
        super();

        this.state = {
            university: '',
            degree: '',
            subject: '',

        };

        this.onClickAddBtn = this.onClickAddBtn.bind(this);

    };

    onClickAddBtn(){
        console.log('clicked');
    }


    render(){
        
        return(
            <>
            <label>
                <input placeholder='University/College'/>
            </label>
            <label>
                <input placeholder='Degree'/>
            </label>
            <label>
                <input placeholder='Subject'/>
            </label>
            <button onClick={this.onClickAddBtn}>Add</button>
            <button>Delete</button>
            <h2>Education</h2>
            </>
        );
    }
};







export default Education;