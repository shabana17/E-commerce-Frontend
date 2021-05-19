import { OfflinePinRounded } from '@material-ui/icons';
import { Component } from 'react';
import {WISHLIST, REMOVE} from '../actions/actions';
// const wish={};
let init={
    products:[],
    mul:0,
};
    
const wishlistReducer = (state = init, action) => {
let findPro;
switch (action.type) {
    case WISHLIST:
        console.log('1',action.payload)
        console.log('2',action.payload.total)           
        let check = state.products.find(pr => pr.productId === action.payload.productId && pr.size===action.payload.size && pr.quant===action.payload.quant);
      
        if (check) {
             return state    
        }
        else {
            let mu=action.payload.quant*action.payload.price
            return {
                ...state, products:[...state.products,action.payload],mul:state.mul+action.payload.total
            }
        }
    case REMOVE:
        findPro = state.products.find(product => product.productId  === action.payload.productId );
        let a=action.payload.total
        const filtered = state.products.filter(product => product.productId  !== action.payload.productId );
        return {
            ...state,
            products: filtered,mul:state.mul-a,
        }

   
    default:
        return state;
}
}
export default wishlistReducer


