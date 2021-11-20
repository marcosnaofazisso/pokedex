import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logo.png'
import Menu from '../menu/Menu';

const StyledHeader = styled.header`
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
