import React from "react";
import "./Person.css";

const person = props => {
  const { name, age, click, changed } = props;
  console.log(name, age, click, changed);
  return (
    <div className="Person">
      <p onClick={click}>
        I'm a {name}! iam {age} old.
      </p>
      <p>{props.children}</p>
      <input type="text" value={name} onChange={changed} />
    </div>
  );
};
export default person;
