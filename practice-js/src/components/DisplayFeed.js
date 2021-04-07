import React from 'react'
import AddToFeed from './AddToFeed';
import FeedPost from './FeedPost';

function DisplayFeed(props) {
    return (
        <div>
            <AddToFeed feed={props.feed} getFeed={ props.getFeed } />
            <ul>{props.feed.map(post => <FeedPost key={post.date} name={ post.post } />)}</ul>
        </div>
    )
}

export default DisplayFeed
