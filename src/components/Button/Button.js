import React from "react";
import { Link } from "react-router-dom";
import "./Button.sass";

export const Button = ({ link, name, className }) => {
  return (
    <Link to={link} className={`button ${className}`}>
      {name}
    </Link>
  );
};
