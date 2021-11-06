import React from 'react'
import {Link } from 'react-router-dom'

function AllPokemons() {
    return (
        <div>
            <h1>Pokemons</h1>
            <p>pokemon 1</p><Link to="pokemon">Link</Link>
            <p>pokemon 2</p>
            <p>pokemon 3</p>
            <p>pokemon 4</p>
            <p>pokemon 5</p>
        </div>
    )
}

export default AllPokemons;
