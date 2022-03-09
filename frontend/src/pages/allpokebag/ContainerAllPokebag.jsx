import React from 'react'
import styled from 'styled-components';

const ContainerPokebag = styled.div`
  font-family: 'Roboto', sans-serif;
  background: rgb(247, 246, 246);
  margin: 1rem;
  padding: 1.4rem;
  border-radius: 10px;

`;

export default function ContainerAllPokebag(props) {
    return (
        <ContainerPokebag>
            {props.children}
        </ContainerPokebag>
    )
}