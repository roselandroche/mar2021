import React from 'react';
import styled from 'styled-components';

const Post = styled.div`
    margin: 8px auto;
    width: 50%;
    line-height: 18px;
    font-size: 18px;
    border: 2px solid purple;
    border-radius: 6px;
    padding: 8px 16px;
`;

function FeedPost({ name }) {
    return (
        <Post>
            <p>{name}</p>
        </Post>
    )
}

export default FeedPost
