import {CHECKOUT} from '../actions/actions';
const check=[];
const checkReducer = (state = check, action) => {
    switch (action.type) {
        case CHECKOUT:
            
             return [...state,action.payload]     
        default:
            return state
    }
}
export default checkReducer;