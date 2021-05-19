import { combineReducers } from 'redux';
import menReducer from './menReducer';
import womenReducer from './womenReducer';
import kidsReducer from './kidsReducer';
import furnitureReducer from './furnitureReducer';
import bagReducer from './bagReducer';
import checkReducer from './checkReducer';
import addressReducer from './addressReducer'
import signupReducer from './signupReducer';
import wishlistReducer from './wishlistReducer'
const rootReducer = combineReducers({
  men: menReducer,
  women: womenReducer,
  kids: kidsReducer,
  furniture: furnitureReducer,
  bag: bagReducer,
  check:checkReducer,
  address:addressReducer,
  signup:signupReducer,
  wish:wishlistReducer,
 })
export default rootReducer;