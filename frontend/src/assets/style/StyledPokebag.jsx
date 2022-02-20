import React from "react";
import styled from "styled-components";

export const CardPokebag = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 20%;
  padding: 1.4rem;
  margin: 1rem;
  box-shadow: inset 0 0 1em red, 0 0 1em red;
  img {
    width: 100%;
    height: auto;
    max-width: 300px;
    max-height: 300px;
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

export const CardButtonPokebag = styled.button`
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
  box-shadow: inset 0 0 1em red, 0 0 1em red;
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