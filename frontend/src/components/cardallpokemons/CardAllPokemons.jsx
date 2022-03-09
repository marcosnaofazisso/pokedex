import { React, useState } from 'react'
import { AddPokebagButton, DeletePokebagButton } from '../../assets/style/StyledPokebag';
import { CardButton, CardPoke } from '../../assets/style/StyledPokemonGlobal';
import { usePokebag } from '../context/PokebagContextProvider';
import { PokebagContext } from '../context/PokebagContextProvider';
import { ModalDiv, ModalHeader, ModalFooter, ModalBody, ModalContent, ModalButton } from '../modal/Modal';

function CardAllPokemons(props) {

  const { myPokemon, setMyPokemon } = usePokebag(PokebagContext);

  const [modal, setModal] = useState({
    showModal: false,
    pokeName: "",
    textType: "",
    article: ""
  })

  const handleAdd = (pokemon) => {
    setModal({
      showModal: !modal.showModal,
      pokeName: pokemon.name,
      textType: "adicionou",
      article: "à"
    })
    if (!myPokemon.includes(pokemon)) {
      myPokemon.push(pokemon)
    } else {
      setModal({
        showModal: !modal.showModal,
        pokeName: pokemon.name,
        textType: "já possui",
        article: "em"
      })
    }
    console.log("MY POKEMON: " + JSON.stringify(myPokemon))
  }

  const handleRemove = (pokemon) => {
    setModal({
      showModal: !modal.showModal,
      pokeName: pokemon.name,
      textType: "removeu",
      article: "de"
    })

    const isInPokebag = myPokemon.filter((poke) => poke.id === pokemon.id);

    if (isInPokebag.length >= 1) {
      const myNewPokemon = myPokemon.filter((poke) => poke.id !== pokemon.id);
      setMyPokemon(myNewPokemon)

    } else {
      setModal({
        showModal: !modal.showModal,
        pokeName: pokemon.name,
        textType: "ainda não possui",
        article: "em"
      })
    }

  }

  const handleHavePokemon = (pokemon, condition) => {
    const isInPokebag = myPokemon.filter((poke) => poke.id === pokemon.id);

    if (condition === "add") {
      var boolean = isInPokebag.length >= 1 ? false : true
      return boolean
    }
    else if (condition === "remove")
      boolean = isInPokebag.length >= 1 ? true : false
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
        <div class="addAndRemoveButtons">
          {handleHavePokemon(props.wholePokemon, "add") && myPokemon.length <= 6 &&
            <AddPokebagButton
              onClick={() => handleAdd(props.wholePokemon)}>+</AddPokebagButton>}
          {handleHavePokemon(props.wholePokemon, "remove") && myPokemon.length > 0 && <DeletePokebagButton
            onClick={() => handleRemove(props.wholePokemon)}>-</DeletePokebagButton>}
        </div>
        {modal.showModal &&
          <ModalDiv>
            <ModalContent>
              <ModalHeader>
                <h1>Boa! ✅</h1>
              </ModalHeader>
              <ModalBody>
                <h3>Você {modal.textType} {modal.pokeName} {modal.article} sua Pokebag!</h3>
              </ModalBody>
              <ModalFooter>
                <ModalButton onClick={() => setModal({
                  showModal: false,
                  pokeName: "",
                  textType: "",
                  article: ""
                })}>Cancelar</ModalButton>
              </ModalFooter>
            </ModalContent>
          </ModalDiv>}
      </div>
    </CardPoke >

  )
}

export default CardAllPokemons
