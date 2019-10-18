import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { Gallery } from './Gallery';
import { Exhibitions } from './Exhibitions';
import { About } from './About';
import { Contact } from './Contact';
import { Detail } from './Detail';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Exhibitions" component={Exhibitions} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Detail/:id" component={Detail} />
    </Switch>
  </BrowserRouter>
);
