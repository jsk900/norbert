import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Detail from "./detail.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Router;
