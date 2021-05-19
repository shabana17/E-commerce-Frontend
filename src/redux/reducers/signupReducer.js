import {SIGNUP} from '../actions/actions';
const signup={};
const signupReducer = (state = signup, action) => {
    switch (action.type) {
        case SIGNUP:
             return action.payload      
        default:
            return state
    }
}
export default signupReducer;