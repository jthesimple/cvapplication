import React from "react";

const PersonalInfo = (props) => {
    const {personal} = props;

    return (
        <>
        <h1>{personal.firstName} {personal.lastName}</h1>
        <div>{personal.address}</div>
        <div>{personal.phoneNumber}</div>
        <div>{personal.email}</div>
        </>
    );
}


export default PersonalInfo;