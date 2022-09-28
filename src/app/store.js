import { combineReducers, createStore } from 'redux'
import tweetsReducer from '../reducers/tweetsReducer'

const rootReducer = combineReducers({
  tweets: tweetsReducer,
})

const configureStore = () => {
  return createStore(
    rootReducer
  );
}

export default configureStore
