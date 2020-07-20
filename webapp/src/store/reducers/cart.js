import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, CHANGE_QTY } from '../actions/cart'

// 初始状态
const initState = {
    cartlist: [],
    totalPrice: 0,
    step: 0
}

// reducer
// 作用: 指定state的修改逻辑：创建一个新state的并返回（覆盖旧数据）
function reducer(state = initState, action) {
    let a = state
    console.log("a="+a)
    switch (action.type) {

        // 添加商品
        case ADD_TO_CART:
            // 返回一个新的State，这个state会自动覆盖store中的旧数据
            return {
                ...state,
                cartlist: [action.goods, ...state.cartlist]
            }
        // 删除商品
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartlist: state.cartlist.filter(item => item.goods_id != action.goods_id)
            }

        // 修改数量
        case CHANGE_QTY:
            
            return {
                ...state,
                cartlist: state.cartlist.map(item => {
                    if (item.goods_id === action.goods_id) {
                        item.goods_qty = action.goods_qty
                    }
                    return item;
                })
            }

        // 清空商品
        case CLEAR_CART:
            return {
                ...state,
                cartlist: []
            }
        default:
            return state;
    }
}

export default reducer;