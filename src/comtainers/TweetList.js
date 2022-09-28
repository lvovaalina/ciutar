import React from 'react'
import {ActionCreators} from '../app/actionCreators'
import Tweet from '../components/Tweet'
import CreateTweet from '../components/CreateTweet'
import TweetWithUpdate from '../components/TweetWithUpdate'
import {useDispatch, connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets
    }
}

const TweetList = ({tweets, isUpdatable = false}) => {
    const dispatch = useDispatch()
    const onDelete = (id) => {
        console.log(id)
        dispatch(ActionCreators.deleteTweet(id))
    }

    const onUpdate = (tweet) => {
        dispatch(ActionCreators.updateTweet(tweet))
    }

    const onCreate = (tweet) => {
        dispatch(ActionCreators.addTweet(tweet))
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

const Tweets = connect(mapStateToProps)(TweetList);

export default Tweets