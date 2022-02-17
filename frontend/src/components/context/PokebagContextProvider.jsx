import React, { useContext, createContext, useState } from 'react'

export const PokebagContext = createContext();

export default function PokebagContextProvider({ children }) {
    const [poke1, setPoke1] = useState("");
    const [poke2, setPoke2] = useState("");
    const [poke3, setPoke3] = useState("");
    const [poke4, setPoke4] = useState("");
    const [poke5, setPoke5] = useState("");
    const [poke6, setPoke6] = useState("");

    return (
        <PokebagContext.Provider value={{
            poke1, setPoke1,
            poke2, setPoke2,
            poke3, setPoke3,
            poke4, setPoke4,
            poke5, setPoke5,
            poke6, setPoke6
        }}>
            {children}
        </PokebagContext.Provider >

    )
}

export function usePokebag() {
    const { poke1, setPoke1,
        poke2, setPoke2,
        poke3, setPoke3,
        poke4, setPoke4,
        poke5, setPoke5,
        poke6, setPoke6 } = useContext(PokebagContext);
    return {
        poke1, setPoke1,
        poke2, setPoke2,
        poke3, setPoke3,
        poke4, setPoke4,
        poke5, setPoke5,
        poke6, setPoke6
    }
}
