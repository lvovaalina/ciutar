import { actionTypes } from "../app/actionTypes"

const initialState = [
    {'authorName': 'aline', tweetContent: 'sdfsdf', id: 1},
    {'authorName': 'aline', tweetContent: 'sdfssssssdf', id: 2},
    {'authorName': 'aline', tweetContent: 'sdfweqwsdf', id: 3},]

const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.tweets.addTweet:
            return [...state, action.payload.tweet]
        case actionTypes.tweets.deleteTweet:
            return state.filter(tweet => tweet.id !== action.payload.id)
            
        case actionTypes.tweets.updateTweet: 
            return state.map(tweet => {
                if (tweet.id === action.payload.tweet.id) return action.payload.tweet
                return tweet
            })
            
        default:
            return state
    }

}

export default tweetsReducer

// const tweetsReducer = createSlice({
//   name: 'tweets',
//   initialState: {
//     tweets: []
//   },
//   reducers: {
//     addTweet: (state, action) => {
//       state.tweets = [...state.tweets, action.payload]
//     },
//     deleteTweet: (state, action) => {
//       state.tweets = state.tweets.filter(item => item.id !== action.payload.id)
//     },
//     editTweet: (state, action) => {
//       state.tweets = state.tweets.map(tweet => {
//             if (tweet.id === action.payload.id) return action.payload
//             return tweet
//       })
//     }
//   }
// })

// export const { addTweet, deleteTweet, editTweet } = tweetsSlice.actions

// export default tweetsSlice.reducer