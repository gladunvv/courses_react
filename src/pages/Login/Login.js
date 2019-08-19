import React from "react";

import "./Login.sass";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const Login = () => {
  return (
    <div className="login">
      <form className="form form-login">
        <span className="login__text">Вход</span>
        <Input className="login__input" placeholder="E-mail" type="text" />
        <Input
          className="login__input"
          placeholder="Password"
          type="password"
        />
        <Button className="login__button" name="Войти" />
      </form>
    </div>
  );
};
