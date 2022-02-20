import React from 'react'
import { usePokebag } from '../../components/context/PokebagContextProvider';

import { CardPokebag, CardButtonPokebag } from '../../assets/style/StyledPokebag';

export default function Pokebag() {

    const { poke1, setPoke1,
        poke2, setPoke2,
        poke3, setPoke3,
        poke4, setPoke4,
        poke5, setPoke5,
        poke6, setPoke6 } = usePokebag();

    return (
        <div>
            <CardPokebag>
                <p>#</p>
                <img src="" />
                <h3></h3>
                <span></span>
            </CardPokebag>
        </div >
    )
}

