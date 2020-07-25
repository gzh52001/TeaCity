import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, CHANGE_QTY } from '../actions/cart'
import { put } from './../../utils/request';

// 初始状态
const initState = {
    cartlist: [],
    totalPrice: '0.00',
    step: 0,
    checkall:0,
    delbtn:true,
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'default_List':
            return {
                ...state,
                cartlist: action.defaultList,
                totalPrice: (action.defaultList.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count*item.goodsPrice,0).toFixed(2),
                checkall: ((action.defaultList.filter(item => item.isChecked == 0)).length == state.cartlist.length)?1:0,
            }
        // 添加商品
        case ADD_TO_CART:
            // 返回一个新的State，这个state会自动覆盖store中的旧数据
            return {
                ...state,
                cartlist: 
                        state.cartlist.filter(item=>item.goodsId == action.goods.goodsId).length?
                        state.cartlist.map(item=>{
                            if(item.goodsId == action.goods.goodsId){
                                item.count = item.count + action.goods.count
                            }
                            return item
                        }):
                        [action.goods, ...state.cartlist]
            }
    
        // 删除商品
        case REMOVE_FROM_CART:
            return {
                ...state,
                // cartlist: state.cartlist.filter(item => item.goods_id != action.goods_id)
                cartlist: state.cartlist.filter(item => !item.isChecked )
            }
        
        // 修改数量
        case CHANGE_QTY:
            
            return {
                ...state,
                cartlist: state.cartlist.map(item => {
                    
                    if (item.goodsId === action.goodsId) {
                        
                        put('/cart/edit',{goodsId:action.goodsId,userId:action.userId,count:action.count<(1||'')?1:action.count>100?100:action.count})
                        item.count = action.count
                    }
                    return item;
                }),
                totalPrice: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count*item.goodsPrice,0).toFixed(2),
            }
        //父复选框控制子复选框
        case 'check_All':
            return {
                ...state,
                checkall: action.con?false:!state.checkall
            }
        case 'check_All_2':
            let obj={
                userId:state.cartlist[0].userId,
                callCheck:action.isChecked
            }
            put('/cart/callcheck',obj)
            // console.log(action.isChecked)
            return {
                ...state,
                cartlist: state.cartlist.map(item =>{
                    // console.log(action.isChecked)
                    item.isChecked = action.isChecked
                    return item
                } ),
                totalPrice: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count*item.goodsPrice,0).toFixed(2),
                step: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count,0),
            }
        //子复选框控制父复选框
        case 'check_one':
            return {
                ...state,
                cartlist: state.cartlist.map(item => {
                    if (item.goodsId === action.goods_id) {
                        let obj={
                            goodsId:item.goodsId,
                            userId:item.userId,
                            isChecked:!item.isChecked
                        }
                        put('/cart/inputcheck',obj)
                        item.isChecked = !item.isChecked
                    }
                    return item;
                })
            }
        case 'check_one_2':
            return {
                ...state,
                checkall: ((state.cartlist.filter(item => item.isChecked == 1)).length == state.cartlist.length)?1:0,
                totalPrice: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count*item.goodsPrice,0).toFixed(2),
                step: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count,0),
            }
        //删除
        case 'del_Goods':
            return {
                ...state,
                cartlist: state.cartlist.filter(item => !item.isChecked ),
                // cartlist: state.cartlist.filter(item =>item.goodsId!=action.goods_id),
                totalPrice: '0.00',
                step: 0,
            }
        // 清空商品
        case CLEAR_CART:
            return {
                ...state,
                cartlist: [],
                totalPrice: '0.00',
                step: 0,
            }
        case 'del_Btn':
            return {
                ...state,
                delbtn: !state.delbtn
            }
        default:
            return state;
    }
}

export default reducer;