import React, { useState } from 'react';
import styled from 'styled-components';

const FeedForm = styled.form`
    width: 30%;
    height: 200px;
    margin: 36px auto;
    padding: 0px 48px;
    border: 2px solid purple;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

function AddToFeed(props) {
    const [feedData, setFeedData] = useState({
        date: Date.now(),
        post: '',
    });

    function addPost() {
        setFeedData({...feedData, date: Date.now()});
        props.getFeed([...props.feed, feedData]);
    }

    function handleChange(event) {
        setFeedData({
            ...feedData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addPost();
    }

    return (
        <div>
            <FeedForm className="feedData" onSubmit={ handleSubmit }>
                <label>Tell Us What Happened!</label>
                <input type="text" name="post" value={ feedData.post } onChange={ handleChange } placeholder="Spill tea here..." />
                <button type="submit">Submit</button>
            </FeedForm>
        </div>
    )
}

export default AddToFeed
