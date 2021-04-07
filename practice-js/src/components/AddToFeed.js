import React, { useState } from 'react'

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
        console.log('You hit submit');
    }

    return (
        <div>
            <form className="feedData" onSubmit={ handleSubmit }>
                <label>Tell Us What Happened!
                    <input type="text" name="post" value={ feedData.post } onChange={ handleChange } placeholder="Spill tea here..." />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddToFeed
