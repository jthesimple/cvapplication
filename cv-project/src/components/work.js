import React from "react";

const Work = (props) =>{
    const {workList, remove} = props;

    return (
        <>
        <ul>
            {workList.map((work)=>{
                return (<React.Fragment key={work.id}>
                <div>{work.company}</div>
                <div>{work.position}</div>
                <div>{work.tenure}</div>
                <li>{work.details}</li>
                <button onClick={() => remove(work.id)}>Remove</button>
                </React.Fragment>)
            })}
        </ul>
        </>
    )
};

export default Work;