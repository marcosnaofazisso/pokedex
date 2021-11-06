import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuS = styled.nav`
  margin-top: 7rem;
  width: 100%;
  height: 8rem;
  background-color: black;
  border-radius: 8px;
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 1rem;
    line-height: 2rem;
  }

  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover,
  a:active,
  a.active {
    color: #ec9191;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #e25d5d;
  }
`;
function Menu() {
    return (
        <div>
            <MenuS>
                <ul>
                    <li><Link to="/">HOME</Link></li>

                    <li><Link to="/allpokemons">LISTA DE POKEMONS</Link></li>

                    <li><Link to="/receita">POKE-BAG</Link></li>

                </ul>
            </MenuS>

        </div>
    )
}

export default Menu
