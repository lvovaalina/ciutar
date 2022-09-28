import { actionTypes } from './actionTypes'

export const ActionCreators = {
    addTweet: (tweet) => ({type: actionTypes.tweets.addTweet, payload: {tweet}}),
    updateTweet: (tweet) => ({type: actionTypes.tweets.updateTweet, payload: {tweet}}),
    deleteTweet: (id) => ({type: actionTypes.tweets.deleteTweet, payload: {id}}),

    registerUser: (user) => ({type: actionTypes.user.register, payload: {user}}),
    login: (user) => ({type: actionTypes.user.login, payload: {user}}),
    logout: () => ({type: actionTypes.user.logout}),
  }