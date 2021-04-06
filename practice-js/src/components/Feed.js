import React, { useState } from 'react'

function Feed() {
    const [feedData, setFeedData] = useState({
        date: Date.now(),
        post: ''
    });

    function handleChange(event) {
        setFeedData({
            ...feedData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
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

export default Feed
