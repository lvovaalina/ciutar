import React from 'react'

const Tweet = ({tweet}) => {

    const {authorName, tweetPostedDate, tweetUpdateDate, tweetContent} = tweet

    return (
        <div>
            <div>{authorName}</div>
            <div>{tweetContent}</div>
            <div>{tweetPostedDate}</div>
            {!!tweetUpdateDate ? (<div>Edited</div>) : null}
        </div>
    )
}

export default Tweet