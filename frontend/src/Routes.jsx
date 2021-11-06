import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './components/home/Home'
import AllPokemons from './components/allpokemons/AllPokemons'
import Pokemon from './components/pokemon/Pokemon';
import Pokebag from './components/pokebag/Pokebag';

function Routes() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/allpokemons" component={AllPokemons} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/pokebag" component={Pokebag} />
        </Switch>
      </>
    );
  }
  
  export default Routes;