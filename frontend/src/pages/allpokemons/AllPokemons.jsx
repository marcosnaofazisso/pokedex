import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardAllPokemons from '../../components/cardallpokemons/CardAllPokemons'
import ContainerAllPokemons from '../../components/cardallpokemons/ContainerAllPokemons'
import { MainDiv, MainContainer } from '../../assets/style/StyledGlobal'
import { images } from '../../assets/data/AllPokemonImages'
import { typeColors } from '../../assets/data/TypesColors'


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
    }, [])

    return (
        <MainDiv>
            <h1 className="headerPokemons">Pokemons</h1>
            <MainContainer>
                <ContainerAllPokemons>
                    {pokemons.map((pokemon) => {
                        return (
                            <CardAllPokemons
                                key={pokemon.id}
                                number={pokemon.number}
                                name={pokemon.name}
                                img={images[pokemon.name] ? images[pokemon.name] : images[-1]}
                                color={typeColors[pokemon.type1] ? typeColors[pokemon.type1] : typeColors[-1]}
                                type1={pokemon.type1}
                                type2={pokemon.type2}
                                wholePokemon={pokemon}
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
