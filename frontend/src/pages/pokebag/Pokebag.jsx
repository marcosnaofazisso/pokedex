import { React, useState } from 'react'
import { usePokebag } from '../../components/context/PokebagContextProvider';
import { images } from '../../assets/data/AllPokemonImages';
import { typeColors } from '../../assets/data/TypesColors';
import { CardPokebag, CardButtonPokebag } from '../../assets/style/StyledPokebag';
import { dataPokemons } from '../../assets/data/DataPokemons';
import { PokebagContext } from '../../components/context/PokebagContextProvider';

export default function Pokebag() {

    const { myPokemon, setMyPokemon } = usePokebag(PokebagContext);

    return (
        <div>
            <CardPokebag type={typeColors[myPokemon.type1] ? typeColors[myPokemon.type1] : typeColors[-1]}>
                <p>#{myPokemon.number !== "" ? myPokemon.number : ""}</p>
                <img src={images[myPokemon.name ? myPokemon.name : "#"]} alt={myPokemon.name ? myPokemon.name : "Not Found"} />
                <h3>{myPokemon.name !== "" ? myPokemon.number : ""}</h3>
                <span>{typeColors[myPokemon.type1 ? myPokemon.type1 : ""]}</span>
                <CardButtonPokebag type={typeColors[myPokemon.type1] ? typeColors[myPokemon.type1] : typeColors[-1]}>Detalhes</CardButtonPokebag>
                <button onClick={() => setMyPokemon(dataPokemons[1])}>Change my pokemon!!!!</button>
            </CardPokebag>
        </div >
    )
}

