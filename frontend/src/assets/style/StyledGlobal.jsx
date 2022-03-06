import styled from "styled-components";

export const MainDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin: 0 auto 0;
  padding: 0 20px;
  width: 100%;
  max-width: 1400px;
  margin-top: 5rem;
  .headerPokemons {
    text-align: center;
    font-weight: 900;
    font-size: 4rem;
  }
  .headerPokebag {
    text-align: center;
    font-weight: 900;
    font-size: 4rem;
  }
 
`;

export const MainContainer = styled.div`
  display: flex;
  margin: 1rem 0 0;
  padding: 0 50px;
  border-radius: 15px;
  background: rgb(247, 246, 246);
  height: 100%;

  #ash {
    margin-left: 3rem;
    margin-top: 6rem;
    width: 30%;
    height: 30%;
  }
  #pikachu {
    margin-top: 17rem;
    width: 20%;
    height: 20%;
  }
 
  @media (max-width: 789px) {
    margin: 3rem 3% auto;
    display: block;
    padding: 15px;
    height: 100%;
    h6 {
      font-size: 14px;
    }
  }
`;
