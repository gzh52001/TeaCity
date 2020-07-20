import {combineReducers} from 'redux';
import userReducer from './user';
import orderReducer from './order';
import cartReducer from './cart';
import detailReducer from './detail';
const reducer = combineReducers({
    user:userReducer,
    order:orderReducer,
    cart:cartReducer,
    detail:detailReducer,
})
// console.log(reducer())
export default reducer;