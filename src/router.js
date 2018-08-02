import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Gallery from "./Gallery";
import Exibitions from "./Exibitions";
import About from "./About";
import Contact from "./Contact";
import Detail from "./Detail";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Exibitions" component={Exibitions} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Detail/:id" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Router;
