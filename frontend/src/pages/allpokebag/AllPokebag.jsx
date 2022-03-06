import React from 'react'
import Pokebag from '../pokebag/Pokebag'
import ContainerAllPokebag from '../allpokebag/ContainerAllPokebag';
import { MainDiv, MainContainer } from '../../assets/style/StyledGlobal';

export default function AllPokebag() {
    return (
        <MainDiv>
            <h1 class="headerPokebag">Pokebag</h1>
            <MainContainer>
                <ContainerAllPokebag>
                    <Pokebag />
                </ContainerAllPokebag>
            </MainContainer>
        </MainDiv>
    )
}
