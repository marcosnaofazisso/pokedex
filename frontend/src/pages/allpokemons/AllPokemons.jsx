import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardAllPokemons from '../../components/cardallpokemons/CardAllPokemons'
import ContainerAllPokemons from '../../components/cardallpokemons/ContainerAllPokemons'
import { MainDiv, MainContainer } from '../../assets/style/StyledGlobal'

import pokemon1 from '../../assets/img/bulbasaur.jpg'
import pokemon2 from '../../assets/img/ivysaur.jpg'
import pokemon3 from '../../assets/img/venusaur.jpg'
import notFound from '../../assets/img/logo.png'

const vermelho = "ff0000;"
const verde = "00ff00;"
const azul = "0000ff;"
const semCor = "000000;"

const images = {
    Bulbasaur: pokemon1,
    Ivysaur: pokemon2,
    Venusaur: pokemon3,
    notFound: notFound
}

const colors = {
    grass: verde,
    water: azul,
    fire: vermelho,
    noColor: semCor
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
        <MainDiv>
            <h1>Pokemons</h1>
            <MainContainer>
                <ContainerAllPokemons>
                    {pokemons.map((pokemon) => {
                        return (
                            <CardAllPokemons
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                img={images[pokemon.name] ? images[pokemon.name] : images[notFound]}
                                color={colors[pokemon.type1] ? colors[pokemon.type1] : colors[semCor] }
                                type1={pokemon.type1}
                                type2={pokemon.type2}
                                link={<Link title="See pokemon" to={`/pokemon/${pokemon.id}`}>Ver detalhes</Link>}
                            ></CardAllPokemons>
                        );
                    })}
                </ContainerAllPokemons>
            </MainContainer>
        </MainDiv>
    )
}

export default AllPokemons;
