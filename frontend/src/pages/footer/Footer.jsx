import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/img/logo.png'

const FooterS = styled.div`
  margin-top: 7rem;
  width: 100%;
  height: 10rem;
  background-color: #ffffff;
  border: 3px solid black;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  display: flex;
  p {
      color: black;
      font-size: 1.25rem;
      font-weight: 400;
  }
  img {
      height: 30px;
      width: 30px;
  }
`;

function Footer() {
    return (
        <div>
            <FooterS>
                <img src={logo} alt="logo-pokemon" />
                <p>Pokedex por Marcos Vinicius Ferreira</p>
                <img src={logo} alt="logo-pokemon" />
            </FooterS>
        </div>
    )
}

export default Footer
