import React from 'react'
import styled from 'styled-components';


const ContainerAll = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function ContainerAllPokemons(props) {
    return (
        <ContainerAll>
            {props.children}
        </ContainerAll>
    )
}

export default ContainerAllPokemons
