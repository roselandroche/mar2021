import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NiceNav = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: black;
    padding: 8px 16px;
    border: 2px solid #fff;

    &:focus, &:hover, &:active {
        text-decoration: none;
        border: 2px solid #f1e8ff;
        border-radius: 6px;
        background-color: #f1e8ff;
    }
`;

function Nav() {
    return (
        <NiceNav>
            <StyledLink to={'/'} >Home</StyledLink>
            <StyledLink to={'/random'} >Random</StyledLink>
            <StyledLink to={'/quote'} >Quote</StyledLink>
            <StyledLink to={'/displayfeed'} >Display Feed</StyledLink>
        </NiceNav>
    )
}

export default Nav
