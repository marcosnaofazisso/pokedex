import styled from 'styled-components';

export const ModalDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 950px;
  background-color: #fff;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  text-align: center;
  h3 {
    display: inline-block;
  }

`;
export const ModalFooter = styled.div`
  padding: 10px;
  text-align: center;

`;

export const ModalButton = styled.button`
  margin: 5px 5px;
  width: 30%;
  padding: 10px 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  background-color: #838383;
  box-shadow: inset 0 0 1em #fff, 0 0 1em ${props => props.type};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 3px 3px #000;
    transform: translate(0, 0px);
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }

`;