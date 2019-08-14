import React from "react";

import "./Button.sass";
export const Button = ({ name, className }) => {
  return <button className={`button ${className}`}>{name}</button>;
};
