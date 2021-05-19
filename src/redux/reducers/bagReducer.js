import { ADD_TO_BAG } from '../actions/actions';
import { REMOVE_TO_BAG } from '../actions/actions';
let init={
    products:[],
    mul:0,
};
const bagReducer = (state = init, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case ADD_TO_BAG:
            console.log('1',action.payload)
            console.log('2',action.payload.total)           
            let check = state.products.find(pr => pr.productId === action.payload.productId && pr.size===action.payload.size && pr.quant===action.payload.quant);
          
            if (check) {
                 return state    
            }
            else {
                return {
                    ...state, products:[...state.products,action.payload],mul:state.mul+action.payload.total
                }
            }
        case REMOVE_TO_BAG:
            findPro = state.products.find(product => product.productId === action.payload.productId);
            let a=action.payload.total
            const filtered = state.products.filter(product => product.productId !== action.payload.productId );
            return {
                ...state,
                products: filtered,mul:state.mul-a,
            }

       
        default:
            return state;
    }
}

export default bagReducer;