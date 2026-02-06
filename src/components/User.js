import React from "react";
import {useState} from 'react'

const User = (props) => {

  const [count, setCount] = useState(0);
  const [abc] = useState("skjd")

  return (
    <div className="about">
      <h1>About us</h1>
      <p>
        BiteDash is a new-age customer-first organisation offering an
        easy-to-use convenience platform, accessible through a unified app.
      </p>
      <p>Name: {props.name}</p>
      <p>Location: Hyd</p>
      <p>Contact: @abc</p>
      <p>Count = {count}</p> 
      <p>abc = {abc}</p>
    </div>
  );
};

export default User;
