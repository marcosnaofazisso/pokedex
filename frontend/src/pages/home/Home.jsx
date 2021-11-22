import React from 'react'
import ash from '../../assets/img/ash.png'
import { MainDiv, MainContainer } from '../../assets/style/StyledGlobal'

function Home() {
    return (
        <MainDiv>
            <MainContainer>
                <div>
                    <h1>Vamos capturar todos os pokémons!</h1>
                </div>
                <div>
                    <img width="20%" src={ash} alt="pokedex" />
                    <h2>Aqui você pode se cadastrar e escolher seus pokémons na Pokedéx!</h2>
                </div>
                <form action="">
                    <fieldset>
                        <legend>Digite seu nome</legend>
                        <div>
                            <label>Nome</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                    <button type="submit">Enviar</button>
                </form>
            </MainContainer>
        </MainDiv>
    )
}

export default Home
