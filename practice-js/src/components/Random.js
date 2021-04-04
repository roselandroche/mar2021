import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    padding: 36px 24px;
`;

const SubTitle = styled.p`
    margin: 0 auto;
    width: 75%;
    text-align: center;
    padding: 12px 36px;
`;

function Random(props) {
    return (
        <div>
            <Title>{props.name} remembers REACT!</Title>
            <SubTitle>{props.name} is going super slow brushing up on React.</SubTitle>
        </div>
    )
}

export default Random
