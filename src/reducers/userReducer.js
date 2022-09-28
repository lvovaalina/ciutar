import { NIL } from "uuid"
import { actionTypes } from "../app/actionTypes"

const initialState = {
    isLoggedIn: false,
    email: '',
    password: '',
    token: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.user.login:
            return { ...action.payload.user, isLoggedIn: true }
        case actionTypes.user.register:
            return { ...action.payload.user, isLoggedIn: true }
            
        case actionTypes.tweets.logout: 
            return null
            
        default:
            return state
    }

}

export default userReducer