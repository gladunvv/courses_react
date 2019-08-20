import React from "react";
import axios from "axios";

import "./SignIn.sass";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {}
    };
  }

  handleRegistrationProcess(event) {
    event.preventDefault();
    axios
      .post("/register")
      .then(response => {
        console.log(response);
        this.setState({ response: response }); // здесь ты берёшь ответ и записываешь его в state
      })
      .catch(error => console.log(error)); // здесь должна быть обработка ошибок. Но это потом
  }

  render() {
    return (
      <div className="signin">
        <form
          className="form form-signin"
          onSubmit={this.handleRegistrationProcess}
        >
          <span className="signin__text">Регистрация</span>
          <Input
            className="signin__input"
            placeholder="First Name"
            type="text"
          />
          <Input
            className="signin__input"
            placeholder="Last Name"
            type="text"
          />
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
          <button>Зарег</button>
        </form>
      </div>
    );
  }
}
