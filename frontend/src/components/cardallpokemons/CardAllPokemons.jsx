import React, { useState } from 'react'
import styled from 'styled-components'

var mainColor = 'white';
var typeColor = 'purple';


const CardPoke = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 20%;
  padding: 1.4rem;
  margin: 1rem;
  box-shadow: inset 0 0 1em ${mainColor}, 0 0 1em ${props => props.type};
  img {
    width: 100%;
  }
  p {
    text-align: center;
    text-align: justify;
  }
  h3 {
    text-align: center;
    margin-top: 10px;
  }
`;

function CardAllPokemons(props) {

  if (props.color == 'grass') {
    typeColor = 'green'
    return typeColor
  }

  return (
    <CardPoke type={props.color}>
      <div>
        <p>#{`${props.id}`.padStart(3, `0`)}</p>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <span>{props.type1}</span> / <span>{props.type2}</span>
        <div>
          <span>{props.color}</span>
        </div>

      </div>
    </CardPoke>

  )
}

export default CardAllPokemons
