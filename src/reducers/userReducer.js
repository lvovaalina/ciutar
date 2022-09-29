import { actionTypes } from "../app/actionTypes"

const initialState = {
    username: '',
    token: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.user.login:
            return { ...action.payload.user }
        case actionTypes.user.register:
            return { ...action.payload.user }
            
        case actionTypes.tweets.logout: 
            return null
            
        default:
            return state
    }

}

export default userReducer