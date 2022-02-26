import styled from "styled-components";

export const CardPokebag = styled.div`
  font-family: 'Roboto', sans-serif; 
  background-color: #fff;
  border-radius: 10px;
  width: 20%;
  padding: 1.4rem;
  margin: 1rem;
  box-shadow: inset 0 0 1em #fff, 0 0 1em ${props => props.type};
  img {
    width: 100%;
    height: auto;
    max-width: 300px;
    max-height: 300px;
  }
  h3 {
    font-size: 3vh;
    font-weight: 900;
    margin-top: 10px;
  }
  .nameType {
    text-align: center;
    padding: 1vh;
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
  box-shadow: inset 0 0 1em red, 0 0 1em ${props => props.type};
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

export const AddPokebagButton = styled.button`
  float: left;
  margin: 5px 5px;
  width: 30%;
  padding: 10px 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  background-color: #7df888;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  &:hover {
    background-color:#46f555

  }
`;

export const DeletePokebagButton = styled.button`
  float: right;
  margin: 5px 5px;
  width: 30%;
  padding: 10px 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  background-color: #f88d7a;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: #cf5742;

  }
`;

export const NoPokemonInPokebag = styled.div`
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.4rem;
  margin: 1rem;
  h1 {
    font-size: 3vh;
    font-weight: 900;
    margin-top: 10px;
  }

`;

export const ContainerPokebag = styled.div`
  text-align: center;
`;