import React, { Component } from "react";

class Education extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: props.eduList,
        };

        this.removeItem = this.removeItem.bind(this);
    };

    removeItem(id){
        const updatedList = this.state.list.filter((item)=> item.id !== id);
        this.setState({
            list: updatedList,
        });
    }

    render(){
        const {list} = this.state;

        return (
            <>
            <h2>Education</h2>
            <ul>
                {list.map((education)=> {
                    return (
                    <React.Fragment key={education.id}>
                    <div>{education.university}</div>
                    <li>{education.degree} {education.subject}</li>
                    <button onClick={() =>this.removeItem(education.id)}>
                        Remove
                    </button>
                    </React.Fragment>
                    )
                })}
            </ul>
            </>


        )

    }

}



export default Education;