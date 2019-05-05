import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import AllBeers from "./Components/beers";
import Randombeers from "./Components/randombeer";
import Newbeers from "./Components/newbeer";

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
        <Router>
          <Switch>
            <Route path="/beers/new" component={Newbeers} />
            <Route path="/beers/random" component={Randombeers} />
            <Route path="/beers/all" component={AllBeers} />
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}
