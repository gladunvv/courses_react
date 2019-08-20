import React from "react";

import "./Input.sass";

export const Input = props => {
  return (
    <input
      name={props.name}
      onChange={props.onChange}
      className={`input ${props.className}`}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  );
};
