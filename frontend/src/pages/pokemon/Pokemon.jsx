import { React, useState, useEffect } from 'react'
import CardPokemon from '../../components/cardpokemon/CardPokemon'
import { typeColors } from '../../assets/data/TypesColors'
import { images } from '../../assets/data/AllPokemonImages'
import api from '../../assets/data/api'

function Pokemon(props) {

    let id = null

    if (props.match.path.toLowerCase().includes('pokemon')) {
        id = props.match.params.id
    }

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const response = await api.get("/pokemons/" + id)
                const data = response.data
                setPokemon(data)
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                console.log("Pokemon Request Error: ", error)
            }

        }
        getPokemon();
    }, [])


    return (
        <div>
            <CardPokemon
                key={pokemon.number}
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
