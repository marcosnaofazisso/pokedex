import { React } from 'react'
import { usePokebag } from '../../components/context/PokebagContextProvider';
import { images } from '../../assets/data/AllPokemonImages';
import { typeColors } from '../../assets/data/TypesColors';
import { CardPokebag, CardButtonPokebag, NoPokemonInPokebag, ContainerPokebag } from '../../assets/style/StyledPokebag';
import { dataPokemons } from '../../assets/data/DataPokemons';
import { PokebagContext } from '../../components/context/PokebagContextProvider';

export default function Pokebag() {
    
    const { myPokemon, setMyPokemon } = usePokebag(PokebagContext);

    return (
        <ContainerPokebag>
            {myPokemon != null &&
                <CardPokebag type={typeColors[myPokemon.type1] ? typeColors[myPokemon.type1] : typeColors[-1]}>
                    <div>
                        <p>#{myPokemon.number !== "" ? myPokemon.number : ""}</p>
                        <img src={images[myPokemon.name ? myPokemon.name : "#"]} alt={myPokemon.name ? myPokemon.name : "Not Found"} />
                    </div>
                    <div class="nameType">
                        <h3>{myPokemon.name !== "" ? myPokemon.name : ""}</h3>
                        <span>{typeColors[myPokemon.type1 ? myPokemon.type1 : ""]}</span>
                    </div>
                    <CardButtonPokebag type={typeColors[myPokemon.type1] ? typeColors[myPokemon.type1] : typeColors[-1]}>Detalhes</CardButtonPokebag>
                    <button onClick={() => setMyPokemon(dataPokemons[0])}>Come back Bulbasaur!!!!</button>
                </CardPokebag>
            }
            {myPokemon == "" || myPokemon == null &&
                <NoPokemonInPokebag>
                    <div class="noPokemonsHere">
                        <h1>Você ainda não possui nenhum Pokemon :( </h1>
                    </div>
                    <button onClick={() => setMyPokemon(dataPokemons[0])}>Choose regular Bulbasaur...</button>
                </NoPokemonInPokebag>}
        </ContainerPokebag>
    )
}

