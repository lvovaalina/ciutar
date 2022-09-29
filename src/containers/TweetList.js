import React from 'react'
import { deleteTweet, updateTweet, addTweet } from '../reducers/tweetsReducer'
import Tweet from '../components/Tweet'
import CreateTweet from '../components/CreateTweet'
import TweetWithUpdate from '../components/TweetWithUpdate'
import { useDispatch, useSelector } from 'react-redux'

const TweetList = ({isUpdatable = false}) => {
    const tweets = useSelector((state) => state.tweets)

    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(deleteTweet(id))
    }

    const onUpdate = (tweet) => {
        dispatch(updateTweet(tweet))
    }

    const onCreate = (tweet) => {
        dispatch(addTweet(tweet))
    }

    return (
        <>
        <CreateTweet onSubmit={onCreate}/>
        {tweets.map(tweet => {
            return isUpdatable
                ? (<TweetWithUpdate key={tweet.id} tweet={tweet} onUpdate={onUpdate} onDelete={onDelete} />)
                : (<Tweet key={tweet.id} tweet={tweet} />) 
        })}
        </>
    )
}

export default TweetList