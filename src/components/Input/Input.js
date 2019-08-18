import React from "react";

import "./Input.sass";

export const Input = props => {
  return (
    <input
      className={`input ${props.className}`}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};
