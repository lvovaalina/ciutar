import React, {useState} from 'react'
import TweetForm from './TweetForm'

const emptyTweet = {
    tweetContent: '',
    author: 'alina',
}

const CreateTweet = ({onSubmit}) => {
    const [tweet, setTweet] = useState(emptyTweet)

    const handleSubmit = (tweet) => {
        onSubmit(tweet)

        setTweet({
            tweetContent: '',
            author: 'alina'
        })
    }

    return (
        <TweetForm tweet={tweet} onSubmit={handleSubmit}/>
    )
}

export default CreateTweet