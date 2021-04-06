import React, { useState } from 'react'

function Feed() {
    const [feedData, setFeedData] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('You hit submit');
        setFeedData(feedData.push(event.target.value));
        console.log(feedData);
    }

    return (
        <div>
            <form className="feedData" onSubmit={ handleSubmit }>
                <label>Tell Us What Happened!
                    {/* field for text input */}
                    <input type="text" name="feedPost" value={feedData.feedInput} placeholder="Spill tea here..." />
                </label>
                {/* button to submit that input */}
                <button type="submit" value="Submit">Submit</button>
                {/* p tags to hold that input */}
            </form>
        </div>
    )
}

export default Feed
