import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBarMain from "./NavBarMain";
import Home from "./Home";
import Products from "./Products";
import Careers from "./Careers";
import About from "./About";
import Contact from "./Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBarMain />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
