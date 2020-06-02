import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Importing all the Views
import AllBeers from './Views/AllBeers';
import Home from './Views/Home';
import RandomBeer from './Views/RandomBeer';
import SingleBeer from './Views/SingleBeer';
import CreateBeer from './Views/CreateBeer';

import Navbar from './Components/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/beers" component={AllBeers} />
        <Route path="/random" component={RandomBeer} />
        <Route path="/new" component={CreateBeer} />
        <Route path="/:id" component={SingleBeer} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
