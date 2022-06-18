import React from 'react'
import styled from 'styled-components';

const ContainerPokebag = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;

`;

export default function ContainerAllPokebag(props) {
    return (
        <ContainerPokebag>
            {props.children}
        </ContainerPokebag>
    )
}