import { React } from 'react'
import { useHistory } from 'react-router';
import { usePokebag } from '../../components/context/PokebagContextProvider';
import { images } from '../../assets/data/AllPokemonImages';
import { typeColors } from '../../assets/data/TypesColors';
import { CardPokebag, CardButtonPokebag, NoPokemonInPokebag, ContainerPokebag } from '../../assets/style/StyledPokebag';
import { dataPokemons } from '../../assets/data/DataPokemons';
import { PokebagContext } from '../../components/context/PokebagContextProvider';

export default function Pokebag() {

    let history = useHistory();
    const { myPokemon } = usePokebag(PokebagContext);
    var key = 0

    function goToDetails(id) {
        history.push("/pokemon/" + id)
    }

    return (
        <ContainerPokebag>
            {(myPokemon.length > 0 && myPokemon.length <= 1) &&
                <CardPokebag type={typeColors[myPokemon[0].type1] ? typeColors[myPokemon[0].type1] : typeColors[-1]}>
                    <div>
                        <p>#{myPokemon[0].number !== "" ? myPokemon[0].number : ""}</p>
                        <img src={images[myPokemon[0].name ? myPokemon[0].name : "#"]} alt={myPokemon[0].name ? myPokemon[0].name : "Not Found"} />
                    </div>
                    <div className="nameType">
                        <h3>{myPokemon[0].name !== "" ? myPokemon[0].name : ""}</h3>
                        <span>{myPokemon[0].type1 ? myPokemon[0].type1 : ""}</span>
                    </div>
                    <CardButtonPokebag type={typeColors[myPokemon[0].type1] ? typeColors[myPokemon[0].type1] : typeColors[-1]}
                        onClick={() => goToDetails(myPokemon[0].number)}>Detalhes</CardButtonPokebag>
                </CardPokebag>
            }
            {
                (myPokemon === "" || myPokemon.length === 0 || myPokemon == null) &&
                <NoPokemonInPokebag>
                    <div className="noPokemonsHere">
                        <h1>Você ainda não possui nenhum Pokemon :( </h1>
                    </div>
                    <button onClick={() => myPokemon.push(dataPokemons[0])}>Choose regular Bulbasaur...</button>
                </NoPokemonInPokebag>
            }

            <div>
                {myPokemon.length >= 2 && myPokemon.map((myPoke) => {
                    return (
                        <CardPokebag key={key++}
                            type={typeColors[myPoke.type1] ? typeColors[myPoke.type1] : typeColors[-1]}>
                            <div>
                                <p>#{myPoke.number !== "" ? myPoke.number : ""}</p>
                                <img src={images[myPoke.name ? myPoke.name : "#"]} alt={myPoke.name ? myPoke.name : "Image not found"} />
                            </div>
                            <div className="nameType">
                                <h3>{myPoke.name !== "" ? myPoke.name : ""}</h3>
                                <span>{myPoke.type1 ? myPoke.type1 : ""}</span>
                            </div>
                            <CardButtonPokebag type={typeColors[myPoke.type1] ? typeColors[myPoke.type1] : typeColors[-1]}
                                onClick={() => goToDetails(myPoke.number)}>Detalhes</CardButtonPokebag>
                        </CardPokebag>
                    );
                })}


            </div>

        </ContainerPokebag >
    )
}

