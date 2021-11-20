import React from 'react'
import styled from 'styled-components'

const CardPoke = styled.div`
    background-color: #c5f0accf;
  border-radius: 10px;
  width: 20%;
  padding: 1.4rem;
  margin: 1rem;
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
    return (
            <CardPoke>
                <div>
                    <p>#{`${props.id}`.padStart(3, `0`)}</p>
                    <img src={props.img} alt={props.name} />
                    <h3>{props.name}</h3>
                    <span>{props.type1}</span> / <span>{props.type2}</span>
                </div>
            </CardPoke>

    )
}

export default CardAllPokemons
