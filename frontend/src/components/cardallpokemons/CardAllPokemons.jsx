import { React } from 'react'
import { AddPokebagButton, DeletePokebagButton } from '../../assets/style/StyledPokebag';
import { CardButton, CardPoke } from '../../assets/style/StyledPokemonGlobal';
import { usePokebag } from '../context/PokebagContextProvider';
import { PokebagContext } from '../context/PokebagContextProvider';

function CardAllPokemons(props) {

  const { myPokemon, setMyPokemon } = usePokebag(PokebagContext);

  const handleAdd = (pokemon) => {
    if (!myPokemon.includes(pokemon)) {
      myPokemon.push(pokemon)
    } else {
      alert(`Você já possui ${pokemon.name} em sua Pokebag!`)
      return
    }
    console.log("MY POKEMON: " + JSON.stringify(myPokemon))
  }

  const handleRemove = (pokemon) => {
    const isInPokebag = myPokemon.filter((poke) => poke.id === pokemon.id);

    if (isInPokebag.length >= 1) {
      const myNewPokemon = myPokemon.filter((poke) => poke.id !== pokemon.id);
      alert(`Você retirou ${pokemon.name} da sua Pokebag!`)
      setMyPokemon(myNewPokemon)

    } else (
      alert(`Você ainda não possui ${pokemon.name} em sua Pokebag!`)
    )

  }

  return (
    <CardPoke type={props.color}>
      <div>
        <div>
          <p>#{`${props.number}`.padStart(3, `0`)}</p>
          <img src={props.img} alt={props.name} />
        </div>
        <div className="nameType">
          <h3>{props.name === "Nidoram" ? "Nidoran" : props.name}</h3>
          <span>{props.type1}</span><span>{props.type2 === 'None' ? null : " / " + props.type2}</span>
        </div>
        <div>
          <CardButton type={props.color}>{props.link}</CardButton>
        </div>
        <div>
          {myPokemon.length <= 6 &&
            <AddPokebagButton
              onClick={() => handleAdd(props.wholePokemon)}>+</AddPokebagButton>}
          {myPokemon.length > 0 && <DeletePokebagButton
            onClick={() => handleRemove(props.wholePokemon)}>-</DeletePokebagButton>}
        </div>
      </div>
    </CardPoke >

  )
}

export default CardAllPokemons
