import tweetsReducer from '../reducers/tweetsReducer'
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
      tweets: tweetsReducer,
    },
  })

export default store
