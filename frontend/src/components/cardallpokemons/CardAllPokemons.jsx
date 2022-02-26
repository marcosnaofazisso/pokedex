import { React, useState } from 'react'
import { AddPokebagButton, DeletePokebagButton } from '../../assets/style/StyledPokebag';
import { CardButton, CardPoke } from '../../assets/style/StyledPokemonGlobal';
import { usePokebag } from '../context/PokebagContextProvider';
import { dataPokemons } from '../../assets/data/DataPokemons';
import { PokebagContext } from '../context/PokebagContextProvider';

function CardAllPokemons(props) {

  const { myPokemon, setMyPokemon } = usePokebag(PokebagContext);

  const [newPokemon, setNewPokemon] = useState()

  const handleChange = (pokemon) => {
    setNewPokemon({
      "id": pokemon.id,
      "number": pokemon.number,
      "name": pokemon.name,
      "type1": pokemon.type1,
      "type2": pokemon.type2,
      "hp": pokemon.hp,
      "attack": pokemon.attack,
      "defense": pokemon.defense,
      "special": pokemon.special,
      "speed": pokemon.speed

    })
    console.log("NEWPOKEMON: " + JSON.stringify(newPokemon))

    console.log("MY POKEMON: " + JSON.stringify(myPokemon))
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
          <AddPokebagButton
            onClick={() => setMyPokemon(dataPokemons[props.number - 1])}>+</AddPokebagButton>
            {/* // onClick={() => handleChange(props.wholePokemon)}>+</AddPokebagButton> */}
        <DeletePokebagButton>-</DeletePokebagButton>
      </div>
    </div>
    </CardPoke >

  )
}

export default CardAllPokemons
