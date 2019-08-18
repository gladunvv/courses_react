import React from "react";

import "./Login.sass";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const Login = () => {
  return (
    <div className="login">
      <form className="form">
        <span className="login__text">Login</span>
        <Input className="login__input" placeholder="email" type="text" />
        <Input
          className="login__input"
          placeholder="password"
          type="password"
        />
        <Button className="login__button" name="Войти" />
      </form>
    </div>
  );
};
