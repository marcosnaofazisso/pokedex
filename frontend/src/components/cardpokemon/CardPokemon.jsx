import React from 'react'
import styled from 'styled-components';
import { habitats } from '../../assets/data/TypesHabitat';

const padrao = 'red'

export const CardOnePokemon = styled.div`
  background-color: rgba(100,100,100,0.3);
  border-radius: 10px;
  width: 20%;
  padding: 1.4rem;
  margin: 1rem;
  align-items: center;
  box-shadow: inset 0 0 1.5em white, 0 0 1em ${props => props.type};
  img {
    width: 100%;
    max-width: 200px;
    max-height: 200px;
  }
  p {
    text-align: center;
    text-align: justify;
  }
  h3 {
    text-align: center;
    margin-top: 10px;
  }
  &:hover {
    box-shadow: inset 0 0 1em white, 0 0 2.5em ${props => props.type};
  }
  
`;

export const ContainerOnePokemon = styled.div`
    background-image: url(${props => habitats[props.habitat] ? habitats[props.habitat] : null});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function CardPokemon(props) {
  return (
    <ContainerOnePokemon habitat={props.type1}>
      <CardOnePokemon type={props.color}>
        <div>
          <p>#{`${props.number}`.padStart(3, `0`)}</p>
          <img src={props.img} alt={props.name} />
          <h3>{props.name}</h3>
          <span>{props.type1}</span><span>{props.type2 == 'None' ? null : " / " + props.type2}</span>
          <div>
            <p>HP: {props.hp}</p>
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
            <p>Speed: {props.speed}</p>
            <p>Special: {props.special}</p>
          </div>
        </div>
      </CardOnePokemon>
    </ContainerOnePokemon>
  )
}

export default CardPokemon
