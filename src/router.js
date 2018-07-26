import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Detail from "./Detail";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Detail/:id" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Router;
