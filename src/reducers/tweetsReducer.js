import { createSlice } from '@reduxjs/toolkit'

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: [
        {'authorName': 'aline', tweetContent: 'sdfsdf', id: 1},
        {'authorName': 'aline', tweetContent: 'sdfssssssdf', id: 2},
        {'authorName': 'aline', tweetContent: 'sdfweqwsdf', id: 3},
    ],
  reducers: {
    addTweet: (state, action) => {
        return [...state, action.payload]
    },
    deleteTweet: (state, action) => {
        return state.filter(item => item.id !== action.payload)
    },
    updateTweet: (state, action) => {
      return state.map(tweet => {
            if (tweet.id === action.payload.id) return action.payload
            return tweet
      })
    }
  }
})

export const { addTweet, deleteTweet, updateTweet } = tweetsSlice.actions

export default tweetsSlice.reducer