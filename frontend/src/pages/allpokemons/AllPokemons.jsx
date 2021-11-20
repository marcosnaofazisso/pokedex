import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import pokemon1 from '../../assets/img/bulbasaur.jpg'
import pokemon2 from '../../assets/img/ivysaur.jpg'
import pokemon3 from '../../assets/img/venusaur.jpg'
import notFound from '../../assets/img/logo.png'

const images = {
    Bulbasaur: pokemon1,
    Ivysaur: pokemon2,
    Venusaur: pokemon3,
    notFound: notFound
}

function AllPokemons() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch("/rest/pokemons").then((response) => {
            return response.json()
        }).then((response) => {
            setPokemons(response)
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }, [pokemons])

    return (
        <div>
            <h1>Pokemons</h1>
            {pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                    <p>#{`${pokemon.id}`.padStart(3, `0`)}</p>
                    <img src={images[pokemon.name] ? images[pokemon.name] : images[notFound]} alt={pokemon.name} />
                    <h2>{pokemon.name}</h2>
                    <span>{pokemon.type1}</span> / <span>{pokemon.type2}</span>
                    <div>
                        <Link title="See pokemon" to={`/pokemon/${pokemon.id}`}>Ver detalhes</Link>
                    </div>
                </div>
            ))}
            <p>pokemon 1</p><Link to="pokemon">Link</Link>
            <p>pokemon 2</p>
            <p>pokemon 3</p>
            <p>pokemon 4</p>
            <p>pokemon 5</p>
        </div>
    )
}

export default AllPokemons;
