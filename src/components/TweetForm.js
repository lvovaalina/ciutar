import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd'
import { v4 as uuidv4} from 'uuid'

const { TextArea } = Input

const TweetForm = ({tweet, onSubmit}) => {
    const [tweetContent, setTweetContent] = useState('')

    useEffect(() => {
        if (!!tweet) {
            setTweetContent(tweet.tweetContent)
        }
    }, [tweet])

    const handleSubmit = (e) => {
        e.preventDefault()

        let submittedTweet =
            {
                ...tweet,
                tweetContent: tweetContent,
                authorName: 'alina',
            }


        // move this logic to parent

        if (!submittedTweet.id) {
            submittedTweet.id = uuidv4()
            submittedTweet.tweetPostedDate = Date.now()
        } else {
            submittedTweet.tweetUpdateDate = Date.now()
        }

        onSubmit(submittedTweet)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextArea
                value={tweetContent}
                rows={4}
                onChange={(e) => setTweetContent(e.target.value)}
                maxLength={250}
                />
            <Button htmlType="submit" type="primary">Tweet</Button>
        </form>
    )
}

export default TweetForm