import {ADDRESS} from '../actions/actions';
const add={};
const addressReducer = (state = add, action) => {
    switch (action.type) {
        case ADDRESS:
             return action.payload        
        default:
            return state
    }
}
export default addressReducer;