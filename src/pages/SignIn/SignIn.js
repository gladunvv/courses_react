import React from "react";

import "./SignIn.sass";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const SignIn = () => {
  return (
    <div className="signin">
      <form className="form form-signin">
        <span className="signin__text">Регистрация</span>
        <Input className="signin__input" placeholder="First Name" type="text" />
        <Input className="signin__input" placeholder="Last Name" type="text" />
        <Input className="signin__input" placeholder="Uername" type="text" />
        <Input className="signin__input" placeholder="E-mail" type="text" />
        <Input
          className="signin__input"
          placeholder="Password"
          type="password"
        />
        <Input
          className="signin__input"
          placeholder="Repeat password"
          type="password"
        />
        <Button className="signin__button" name="Зарегестрироваться" />
      </form>
    </div>
  );
};
