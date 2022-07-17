import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logo.png'
import Menu from '../menu/Menu';

const StyledHeader = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  display: inline-block;
  width: 100%;
  background-color: #ee8b8b86;
  border-radius: 8px;
  img {
    position: absolute;
    height: 160px;
    width: 160px;
    padding: 10px 195px 0 0;
  }
  @media (max-width: 800px) {
    text-align: center;
    img {
      margin: auto;
      height: 120px;
     width: 120px;
  }
}
`;

const Stylednovo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    position: relative;
    margin: 0 0 0 170px;
    padding-top: 4rem;
    font-size: 35px;
    font-weight: bold;
  }
  @media (max-width: 800px) {
    p {
      display: none;
    }
    img {
      height: 100px;
      width: 100px;
      margin-left: 100px;
    }
}
`;

function Header() {
  return (
    <div>
        <StyledHeader>
          <Stylednovo>
            <img src={logo} alt="logo do site"></img>
            <p>POKEDÉX</p>
          </Stylednovo>
          <Menu />
        </StyledHeader>
    </div>
  )
}

export default Header
