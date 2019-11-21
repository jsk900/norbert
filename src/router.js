import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Gallery } from "./Gallery";
import { Exhibitions } from "./Exhibitions";
import { About } from "./About";
import { Contact } from "./Contact";
import { Detail } from "./Detail";

export const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Exhibitions" component={Exhibitions} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Detail/:id" component={Detail} />
    </Switch>
  </HashRouter>
);
