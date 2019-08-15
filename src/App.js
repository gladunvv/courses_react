import React, { Component } from "react";

import { Header } from "./components/Header/Header";
import { StartedScreen } from "./components/StartedScreen/StartedScreen";
import { Content } from "./components/Content/Content";
import { Partners } from "./components/Partners/Parthers";
import "./styles/App.sass";
import { Footer } from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <StartedScreen />
        <Content />
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default App;
