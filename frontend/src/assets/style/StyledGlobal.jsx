import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0 auto 0;
  padding: 0 20px;
  width: 100%;
  max-width: 1400px;
  margin-top: 5rem;
`;

export const MainContainer = styled.div`
  margin: 1rem 0 0;
  padding: 0 50px;
  background: rgb(247, 246, 246);
  height: 100%;
 
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
