import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Header from './components/Header';
import Joke from './components/Jokes';

import './index.css';

//prettier-ignore
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" render={() => <Header><App/></Header>}></Route>
      <Route path="/jokes" render={() => <Header><Joke/></Header>}></Route>      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

