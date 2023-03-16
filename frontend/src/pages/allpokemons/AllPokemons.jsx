import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardAllPokemons from '../../components/cardallpokemons/CardAllPokemons'
import ContainerAllPokemons from '../../components/cardallpokemons/ContainerAllPokemons'
import { MainDiv, MainContainer } from '../../assets/style/StyledGlobal'
import { images } from '../../assets/data/AllPokemonImages'
import { typeColors } from '../../assets/data/TypesColors'
import api from '../../assets/data/api'

function AllPokemons() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await api.get("/pokemons");
                const data = response.data
                setPokemons(data);
                // console.log(JSON.stringify(data));

            } catch (error) {
                console.log("Error:", error)
            }
        }
        getProjects();

    }, [])

    return (
        <MainDiv>
            <h1 className="headerPokemons">Pokemons</h1>
            <MainContainer>
                <ContainerAllPokemons>
                    {pokemons.length < 1 && (<h1 className='loading'>Carregando...</h1>)}
                    {Object.values(pokemons).map((pokemon) => {
                        return (
                            <CardAllPokemons
                                key={pokemon.number}
                                number={pokemon.number}
                                name={pokemon.name}
                                img={images[pokemon.name] ? images[pokemon.name] : images[-1]}
                                color={typeColors[pokemon.type1] ? typeColors[pokemon.type1] : typeColors[-1]}
                                type1={pokemon.type1}
                                type2={pokemon.type2}
                                wholePokemon={pokemon}
                                link={<Link title="See pokemon" to={`/pokemon/${pokemon.number}`}>Ver detalhes</Link>}
                            ></CardAllPokemons>
                        );
                    })}
                </ContainerAllPokemons>
            </MainContainer>
        </MainDiv>
    )
}

export default AllPokemons;
