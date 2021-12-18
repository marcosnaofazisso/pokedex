import React from 'react'
import styled from 'styled-components'

var mainColor = 'white';

const CardPoke = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 20%;
  padding: 1.4rem;
  margin: 1rem;
  box-shadow: inset 0 0 1em ${mainColor}, 0 0 1em ${props => props.type};
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
`;

const CardButton = styled.button`
  display: block;
  margin: 5px 5px;
  width: 100%;
  padding: 10px 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  background-color: #fccdcd;
  box-shadow: inset 0 0 1em ${mainColor}, 0 0 1em ${props => props.type};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    background-image: linear-gradient(to right, #f8a686 0%, ${props => props.type} 100%);
    box-shadow: 0 3px 3px ${props => props.type};
    transform: translate(0, 0px);
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }

`;


function CardAllPokemons(props) {

  return (
    <CardPoke type={props.color}>
      <div>
        <p>#{`${props.number}`.padStart(3, `0`)}</p>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <span>{props.type1}</span><span>{props.type2 == 'None' ? null : " / " + props.type2}</span>

        <div>
          <CardButton type={props.color}>{props.link}</CardButton>
        </div>

      </div>
    </CardPoke>

  )
}

export default CardAllPokemons
