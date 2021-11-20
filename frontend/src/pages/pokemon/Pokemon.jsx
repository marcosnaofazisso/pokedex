import { React, useState, useEffect } from 'react'

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
        }).catch(error => {
            console.log(error)
        })
    }, [pokemon])

    return (
        <div>
            <h1>Pokemon {pokemon.name}</h1>
        </div>
    )
}

export default Pokemon
