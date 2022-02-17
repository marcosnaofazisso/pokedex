import React from 'react'
import { usePokebag } from '../../components/context/PokebagContextProvider';

export default function Pokebag() {

    const { poke1, setPoke1,
        poke2, setPoke2,
        poke3, setPoke3,
        poke4, setPoke4,
        poke5, setPoke5,
        poke6, setPoke6 } = usePokebag();

    return (
        <div>
            <h1>Pokebag</h1>
            <span><b>Poke 1: </b>{poke1}</span>
            <button onClick={() => setPoke1("Hitmonlee")}>Set Poke1</button>
            <br />
            <span><b>Poke 2: </b>{poke2}</span>
            <button onClick={() => setPoke2("Machamp")}>Set Poke2</button>
            <br />
            <span><b>Poke 3: </b>{poke3}</span>
            <button onClick={() => setPoke3("Butterfree")}>Set Poke3</button>
            <br />
            <span><b>Poke 4: </b>{poke4}</span>
            <button onClick={() => setPoke4("Pikachu")}>Set Poke4</button>
            <br />
            <span><b>Poke 5: </b>{poke5}</span>
            <button onClick={() => setPoke5("Charmander")}>Set Poke5</button>
            <br />
            <span><b>Poke 6: </b>{poke6}</span>
            <button onClick={() => setPoke6("Squirtle")}>Set Poke6</button>
            <br />
        </div>
    )
}

