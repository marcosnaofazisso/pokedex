import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import AllPokemons from './pages/allpokemons/AllPokemons'
import Pokemon from './pages/pokemon/Pokemon';
import Pokebag from './pages/pokebag/Pokebag';

function Routes() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/allpokemons" component={AllPokemons} />
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/pokebag" component={Pokebag} />
        </Switch>
      </>
    );
  }
  
  export default Routes;