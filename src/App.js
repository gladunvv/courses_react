import React, { Component } from "react";

import { Header } from "./components/Header/Header";
import { StartedScreen } from "./components/StartedScreen/StartedScreen";
import { Content } from "./components/Content/Content";
import "./styles/App.sass";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <StartedScreen />
        <Content />
      </div>
    );
  }
}

export default App;
