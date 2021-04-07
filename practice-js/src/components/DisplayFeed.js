import React from 'react'
import AddToFeed from './AddToFeed';

function DisplayFeed(props) {
    return (
        <div>
            <AddToFeed feed={props.feed} getFeed={ props.getFeed } />
            <ul>{props.feed.map(post => <p key={post.date}>{ post.name }</p>)}</ul>
        </div>
    )
}

export default DisplayFeed
