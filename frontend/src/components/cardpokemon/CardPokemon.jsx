import React from 'react'
import styled from 'styled-components';
import { habitats } from '../../assets/data/TypesHabitat';
import StatsBar from '../statsbar/StatsBar';

export const CardOnePokemon = styled.div`
  background-color: #fff;
  font-family: 'Roboto', sans-serif; 
  font-size: 18px;
  border-radius: 10px;
  width: 20%;
  padding: 1.4rem;
  margin: 1rem;
  align-items: center;
  box-shadow: inset 0 0 1.5em white, 0 0 1em ${props => props.type};
  .mainInfo {
    text-align: center;
  }
  .pokemonStats {
    padding: 1rem;
    margin: 0 1rem;
    border-radius: 20px;
    background-color: #f7f7f7;
  }
  img {
    width: 100%;
    max-width: 200px;
    max-height: 200px;
  }

  h3 {
    text-align: center;
    margin-top: 10px;
  }
  &:hover {
    box-shadow: inset 0 0 1em white, 0 0 2.5em ${props => props.type};
  }

  @media (max-width: 1300px) {
    width: 30%;

}
  @media (max-width: 1000px) {
    width: 50%;

}
  @media (max-width: 800px) {
    width: 70%;

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
          <div className="mainInfo">
            <img src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <span>{props.type1}</span>
            <span>{props.type2 === 'None' ? null : " / " + props.type2}</span>
          </div>
          <div className="pokemonStats">
            <p>HP: {props.hp}</p>
            <StatsBar value={props.hp} max={590} color={props.color}></StatsBar>
            <p>Attack: {props.attack}</p>
            <StatsBar value={props.attack} max={250} color={props.color}></StatsBar>
            <p>Defense: {props.defense}</p>
            <StatsBar value={props.defense} max={150} color={props.color}></StatsBar>
            <p>Speed: {props.speed}</p>
            <StatsBar value={props.speed} max={200} color={props.color}></StatsBar>
            <p>Special: {props.special}</p>
            <StatsBar value={props.special} max={200} color={props.color}></StatsBar>
          </div>
        </div>
      </CardOnePokemon>
    </ContainerOnePokemon>
  )
}

export default CardPokemon
