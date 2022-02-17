import React from 'react'
import PokebagContextProvider from '../../components/context/PokebagContextProvider'
import Pokebag from '../pokebag/Pokebag'

export default function AllPokebag() {
    return (
        <PokebagContextProvider>
            <Pokebag />
        </PokebagContextProvider>
    )
}
