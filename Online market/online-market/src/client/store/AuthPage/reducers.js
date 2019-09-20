import { INPUT_CHANGE_USER_EMAIL, INPUT_CHANGE_USER_PASSWORD } from "./actions";

const defaultState = {
    email: '',
    password: ''
}

const authPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INPUT_CHANGE_USER_EMAIL: 
        return {...state, email: action.payload}
        case INPUT_CHANGE_USER_PASSWORD: 
        return {...state, password: action.payload}
        // ?
        default: {}
    }
    return state;
 }
 export default authPageReducer;