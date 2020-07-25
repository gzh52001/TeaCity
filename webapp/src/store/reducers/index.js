import {combineReducers} from 'redux';
import userReducer from './user';
import cartReducer from './cart';
import detailReducer from './detail';
const reducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    detail:detailReducer,
})
// console.log(reducer())
export default reducer;
