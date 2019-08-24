import React from "react";
import axios from "axios";

import "./SignUp.sass";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      response: {}
    };
    this.handaleInputChange = this.handaleInputChange.bind(this);
  }

  handleRegistrationProcess(event) {
    const data = {};
    event.preventDefault();
    axios
      .post("api/v1/users/createuser/")
      .then(response => {
        console.log("Успешно");
        console.log(response);
        this.setState({ response: response });
      })
      .catch(error => console.log(error));
  }
  handaleInputChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="signup">
        <form
          className="form form-signup"
          onSubmit={this.handleRegistrationProcess}
        >
          <span className="signup__text">Регистрация</span>
          <Input
            value={this.state.firstName}
            onChange={this.handaleInputChange}
            name="firstName"
            className="signup__input"
            placeholder="First Name"
            type="text"
          />
          <Input
            className="signup__input"
            placeholder="Last Name"
            type="text"
          />
          <Input className="signup__input" placeholder="Uername" type="text" />
          <Input className="signup__input" placeholder="E-mail" type="text" />
          <Input
            className="signup__input"
            placeholder="Password"
            type="password"
          />
          <Input
            className="signup__input"
            placeholder="Repeat password"
            type="password"
          />
          <button class="button">
            Зарегестрироваться
          </button>
        </form>
      </div>
    );
  }
}
