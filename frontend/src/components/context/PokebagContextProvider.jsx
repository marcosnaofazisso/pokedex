import React, { useContext, createContext, useState } from 'react'

export const PokebagContext = createContext();

export function usePokebag() {
    const { myPokemon, setMyPokemon } = useContext(PokebagContext);
    return { myPokemon, setMyPokemon };
}

export default function PokebagContextProvider({ children }) {
    const [myPokemon, setMyPokemon] = useState();

    return (
        <PokebagContext.Provider value={{ myPokemon, setMyPokemon }}>
            {children}
        </PokebagContext.Provider >

    )
}


