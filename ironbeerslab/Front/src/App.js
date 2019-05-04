import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
// import Allbeers from "./Components/beers";
// import Newbeers from "./Components/randombeer";
// import Randombeers from "./Components/newbeer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <h1>Ironbeers</h1>

        <Home />
      </div>
    );
  }
}
