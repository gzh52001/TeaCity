import {combineReducers} from 'redux';
import userReducer from './user';
import orderReducer from './order';
const reducer = combineReducers({
    user:userReducer,
    order:orderReducer,
})
// console.log(reducer())
export default reducer;