import React from "react";

const Education = (props) => {
  const {list, remove}  = props;

  return (
    <ul>
      {list.map((item) => {
        return  (
            <React.Fragment key={item.id}>
            <div>{item.university}</div>
            <li>{item.degree} {item.subject}</li>
            <button onClick={() => remove(item.id)}>Remove</button>
            </React.Fragment>
        )
      })}
    </ul>
  );
};



export default Education; 