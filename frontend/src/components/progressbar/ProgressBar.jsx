import React from 'react'
import styled from 'styled-components'

export const ContainerProgressBar = styled.div`
margin: 0;
padding: 0;
    progress {
        appearance: none;
    
        ::-webkit-progress-bar {
            height: 10px;
            border-radius: 10px;
            background-color: #eee;
            box-shadow: inset 0 0 1.5em #ffffff, 0 0 5em #000;


        }
    
        ::-webkit-progress-value {
            height: 10px;
            border-radius: 10px;
            background-color: ${props => props.color};
    
        }

    }
`;

const ProgressBar = props => {

    const { value, max, color } = props;

    return (
        <ContainerProgressBar color={color}>
            <progress value={value} max={max} />
        </ContainerProgressBar>
    );
}

export default ProgressBar;