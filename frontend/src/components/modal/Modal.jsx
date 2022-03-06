import React from 'react'
import styled from 'styled-components';

const ModalDiv = styled.div`
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

const ModalContent = styled.div`
  width: 950px;
  background-color: #fff;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
const ModalFooter = styled.div`
  padding: 10px;
`;

export default function Modal() {
    return (
        <ModalDiv>
            <ModalContent>
                <ModalHeader>
                    <h1>Header</h1>
                </ModalHeader>
                <ModalBody>
                    <h1>Body</h1>
                </ModalBody>
                <ModalFooter>
                    <h1>Footer</h1>
                </ModalFooter>
            </ModalContent>
        </ModalDiv>
    )
}
