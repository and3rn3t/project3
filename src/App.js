import React, { Component } from "react";

import "./App.css";

import Header from "./Components/Header/header";
import Search from "./Components/Search/search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <div className="background"></div>
      </div>
    );
  }
}

export default App;
