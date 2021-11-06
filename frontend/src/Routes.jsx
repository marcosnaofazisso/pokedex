import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './components/home/Home'
import AllPokemons from './components/allpokemons/AllPokemons'


function Routes() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/allpokemons" component={AllPokemons} />
        </Switch>
      </>
    );
  }
  
  export default Routes;