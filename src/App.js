import React, { Component } from "react";

import { Header } from "./components/Header/Header";
import { StartedScreen } from "./components/StartedScreen/StartedScreen";

import "./styles/App.sass";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <StartedScreen />
      </div>
    );
  }
}

export default App;
