import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

import AllBeers from "./Components/beers";
import Randombeers from "./Components/randombeer";
import Onebeer from "./Components/onebeer";

function NotFound() {
  return <p>404</p>;
}
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <h1>Ironbeers</h1>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/all-beers" component={AllBeers} />
          <Route path="/beers/:id/" component={Onebeer} />
          <Route path="/beers/random" component={Randombeers} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
