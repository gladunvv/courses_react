import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MainPage } from "./pages/MainPage/MainPage";
import { Login } from "./pages/Login/Login";

import "./styles/App.sass";
import SignUp from "./pages/SignUp/SignUp";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
