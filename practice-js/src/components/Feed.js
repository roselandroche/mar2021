import React, { useState } from 'react'

function Feed() {
    const [feedData, setFeedData] = useState([]);

    function handleChange(event) {
        setFeedData(...feedData, event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('You hit submit');
        setFeedData([
            ...feedData,
            event.target.value
        ]);
        // feedData.forEach(entry => console.log(entry));
        console.log(feedData);
    }

    return (
        <div>
            <form className="feedData" onSubmit={ handleSubmit }>
                <label>Tell Us What Happened!
                    <input type="text" name="feedPost" value={ feedData.feedPost } onChange={ handleChange } placeholder="Spill tea here..." />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Feed
