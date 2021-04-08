import React from 'react';
import AddToFeed from './AddToFeed';
import FeedPost from './FeedPost';

function DisplayFeed({feed, getFeed}) {
    return (
        <div>
            <AddToFeed feed={feed} getFeed={ getFeed } />
            <div>{ feed.map(post => <FeedPost key={post.date} name={ post.post } />) }</div>
        </div>
    )
}

export default DisplayFeed
