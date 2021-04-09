import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NiceNav = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
`;

function Nav() {
    return (
        <NiceNav>
            <Link to={'/'}>Home</Link>
            <Link to={'/random'}>Random</Link>
            <Link to={'/quote'}>Quote</Link>
            <Link to={'/displayfeed'}>Display Feed</Link>
        </NiceNav>
    )
}

export default Nav
