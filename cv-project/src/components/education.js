import React from "react";

const Education = (props) => {
  const {list, remove}  = props;

  return (
    <ul>
      {list.map((item) => {
        return  (
            <React.Fragment key={item.id}>
            <li>{item.university}</li>
            <div>{item.degree} {item.subject}</div>
            <button onClick={() => remove(item.id)}>Remove</button>
            </React.Fragment>
        )
      })}
    </ul>
  );
};



export default Education; 