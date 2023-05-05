import React, { useState } from "react";

const Education = (props) => {
  const { list } = props;

  const [eduArray, setEduArray] = useState(list);

  const removeEdu = (id) =>{
    const newList = eduArray.filter((edu) => edu.id !==id)
    setEduArray(newList);
  };

  return (
    <ul>
      {eduArray.map((item) => {
        return  (
            <React.Fragment key={item.id}>
            <li>{item.university}</li>
            <div>{item.degree} {item.subject}</div>
            <button onClick={()=>removeEdu(item.id)}>Remove</button>
            </React.Fragment>
        )
      })}
    </ul>
  );
};



export default Education; 