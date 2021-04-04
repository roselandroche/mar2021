import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    padding: 100px 24px 60px 12px;
`;

const SubTitle = styled.p`
    margin: 0 auto;
    width: 50%;
    text-align: center;
    padding: 12px 36px;
`;

const RandomPage = styled.div`
    background-color: #BEA9C6;
    height: 80vh;
`;

function Random(props) {
    return (
        <RandomPage>
            <Title>{props.name} remembers REACT!</Title>
            <SubTitle>{props.name} is going super slow brushing up on React.</SubTitle>
        </RandomPage>
    )
}

export default Random
