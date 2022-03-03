import React from 'react'
import ash from '../../assets/img/ash.png'
import { MainDiv, MainContainer } from '../../assets/style/StyledGlobal'
import { FormWrapper, FormBody, FormHeader, Form, FormFieldset, FormInput, FormButton, FormLink } from '../../assets/style/StyledFormGlobal'
import { useHistory } from 'react-router'

function Home() {
    const history = useHistory()

    const handleLogin = () => {
        alert("Yeeeeah!")
        history.push("/allpokemons")
    }


    return (
        <MainDiv>
            <MainContainer>
                <img id="ash" src={ash} alt="ash" />

                <FormWrapper>
                    <FormBody>
                        <FormHeader>
                            <h2>Cadastre-se e escolha seus Pokémons!</h2>
                        </FormHeader>
                        <Form onSubmit={handleLogin} id="form">

                            <FormFieldset>
                                <label>Nome: </label>
                                <FormInput
                                    type="text"
                                    id="name"
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </FormFieldset>
                            <FormFieldset>
                                <label>E-mail:</label>
                                <FormInput
                                    type="email"
                                    id="email"
                                    placeholder="Digite seu email"
                                    required
                                />
                            </FormFieldset>

                            <FormFieldset>
                                <FormButton type="submit">Vamos lá!</FormButton>
                            </FormFieldset>
                        </Form>

                        <FormFieldset>
                            <FormLink href="/allpokemons">
                                <p>Quero continuar sem me cadastrar...</p>
                            </FormLink>
                        </FormFieldset>
                    </FormBody>
                </FormWrapper>

            </MainContainer>
        </MainDiv>
    )
}

export default Home
