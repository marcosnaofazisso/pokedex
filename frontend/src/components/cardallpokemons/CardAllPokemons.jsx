import { React, useState } from 'react'
import { AddPokebagButton, DeletePokebagButton } from '../../assets/style/StyledPokebag';
import { CardButton, CardPoke } from '../../assets/style/StyledPokemonGlobal';
import { usePokebag } from '../context/PokebagContextProvider';
import { PokebagContext } from '../context/PokebagContextProvider';
import { ModalDiv, ModalHeader, ModalFooter, ModalBody, ModalContent, ModalButton } from '../../assets/style/StyledModal';


function CardAllPokemons(props) {
  const { myPokemon, setMyPokemon } = usePokebag(PokebagContext);
  const [modal, setModal] = useState({
    showModal: false,
    message: ""
  })

  const handleAdd = (pokemon) => {
    setModal({
      showModal: !modal.showModal,
      message: `Você adicionou ${pokemon.name} à sua Pokebag!`
    })

    if (!myPokemon.includes(pokemon)) {
      setMyPokemon(myPokemon => myPokemon.concat(pokemon));
      myPokemon.push(pokemon)
    }
    console.log("MY POKEMON: " + JSON.stringify(myPokemon))
  }

  const handleRemove = (pokemon) => {
    setModal({
      showModal: !modal.showModal,
      message: `Você removeu ${pokemon.name} de sua Pokebag!`
    })

    const isInPokebag = myPokemon.filter((poke) => poke.number === pokemon.number);

    if (isInPokebag.length >= 1) {
      const myNewPokemon = myPokemon.filter((poke) => poke.number !== pokemon.number);
      setMyPokemon(myNewPokemon)
    }
  }

  const handleHavePokemon = (pokemon, condition) => {
    const isInPokebag = myPokemon.filter((poke) => poke.number === pokemon.number);
    if (condition === "add") { var boolean = isInPokebag.length > 0 ? false : true }
    else if (condition === "remove") { boolean = isInPokebag.length > 0 ? true : false }
    return boolean
  }

  return (
    <CardPoke type={props.color}>
      <div>
        <div>
          <p>#{`${props.number}`.padStart(3, `0`)}</p>
          <img src={props.img} alt={props.name} />
        </div>
        <div className="nameType">
          <h3>{props.name === "Nidoram" ? "Nidoran" : props.name}</h3>
          <span>{props.type1}</span><span>{props.type2 === 'None' ? null : " / " + props.type2}</span>
        </div>
        <div>
          <CardButton type={props.color}>{props.link}</CardButton>
        </div>
        <div className="addAndRemoveButtons">
          {handleHavePokemon(props.wholePokemon, "add") && myPokemon.length < 6 &&
            <AddPokebagButton
              onClick={() => handleAdd(props.wholePokemon)}>+</AddPokebagButton>}
          {handleHavePokemon(props.wholePokemon, "remove") && <DeletePokebagButton
            onClick={() => handleRemove(props.wholePokemon)}>-</DeletePokebagButton>}
        </div>
        {modal.showModal &&
          <ModalDiv>
            <ModalContent>
              <ModalHeader>
                {myPokemon.length <= 5 && <h1>Boa! ✅</h1>}
                {myPokemon.length > 5 && <h1>Esse foi o ultimo 😞</h1>}
              </ModalHeader>
              <ModalBody>
                <h3>{modal.message}</h3>
                {(myPokemon.length === 0) &&
                  <p>Sua Pokebag está vazia.</p>}
                {(myPokemon.length < 6 && myPokemon.length > 0) &&
                  <p>Total na Pokebag: {myPokemon.length} (máx: 6)</p>}
                {(myPokemon.length >= 6) && <p>Você encheu sua Pokebag. Não poderá adicionar mais pokemons🚫</p>}
              </ModalBody>
              <ModalFooter>
                <ModalButton onClick={() => setModal({
                  showModal: false,
                  message: ""
                })}>Ok</ModalButton>
              </ModalFooter>
            </ModalContent>
          </ModalDiv>}
      </div>
    </CardPoke >

  )
}

export default CardAllPokemons
