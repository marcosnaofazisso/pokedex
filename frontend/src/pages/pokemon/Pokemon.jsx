import { React, useState, useEffect } from 'react'
import CardPokemon from '../../components/cardpokemon/CardPokemon'
import { typeColors } from '../../assets/data/TypesColors'
import { images } from '../../assets/data/AllPokemonImages'


function Pokemon(props) {

    let id = null

    if (props.match.path.toLowerCase().includes('pokemon')) {
        id = props.match.params.id
    }

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch("/rest/pokemons/" + id).then((resp) => {
            return resp.json()
        }).then((resp) => {
            setPokemon(resp)
            console.log(resp)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
            <CardPokemon
                key={pokemon.id}
                number={pokemon.number}
                name={pokemon.name}
                img={images[pokemon.name] ? images[pokemon.name] : images[-1]}
                color={typeColors[pokemon.type1] ? typeColors[pokemon.type1] : typeColors[-1]}
                type1={pokemon.type1}
                type2={pokemon.type2}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                speed={pokemon.speed}
                special={pokemon.special}>
            </CardPokemon>
        </div>
    )
}

export default Pokemon
