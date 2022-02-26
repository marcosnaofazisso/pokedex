import React from 'react'
import { AddPokebagButton, DeletePokebagButton } from '../../assets/style/StyledPokebag';
import { CardButton, CardPoke } from '../../assets/style/StyledPokemonGlobal';
import { usePokebag } from '../context/PokebagContextProvider';
import { dataPokemons } from '../../assets/data/DataPokemons';
import { Link } from 'react-router-dom';
import { PokebagContext } from '../context/PokebagContextProvider';

function CardAllPokemons(props) {

  const { myPokemon, setMyPokemon } = usePokebag(PokebagContext);

  function addedPokemon() {
    alert("Pokemon adicionado à sua Pokebag!")
  }

  return (
    <CardPoke type={props.color}>
      <div>
        <div>
          <p>#{`${props.number}`.padStart(3, `0`)}</p>
          <img src={props.img} alt={props.name} />
        </div>
        <div class="nameType">
          <h3>{props.name == "Nidoram" ? "Nidoran" : props.name}</h3>
          <span>{props.type1}</span><span>{props.type2 == 'None' ? null : " / " + props.type2}</span>
        </div>
        <div>
          <CardButton type={props.color}>{props.link}</CardButton>
        </div>
        <div>
          <AddPokebagButton onClick={() => setMyPokemon(dataPokemons[props.number - 1], addedPokemon())}>+</AddPokebagButton>
          <DeletePokebagButton>-</DeletePokebagButton>
        </div>
      </div>
    </CardPoke>

  )
}

export default CardAllPokemons
