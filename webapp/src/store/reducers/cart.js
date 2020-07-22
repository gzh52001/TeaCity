import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, CHANGE_QTY } from '../actions/cart'
import { put } from './../../utils/request';
// 初始状态
const initState = {
    cartlist: [],
    totalPrice: '0.00',
    step: 0,
    checkAll:0,
    cartlistdemo:[]
}
// let goods = []
// reducer
// 作用: 指定state的修改逻辑：创建一个新state的并返回（覆盖旧数据）
function reducer(state = initState, action) {
    switch (action.type) {
        case 'default_List':
            return {
                ...state,
                cartlist: action.defaultList,
                cartlistdemo: action.defaultList
            }
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
                    if (item.goodsId === action.goodsId) {
                        put('/cart/edit',{goodsId:action.goodsId,userId:action.userId,count:action.count})
                        item.count = action.count
                    }
                    return item;
                }),
                totalPrice: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count*item.goodsPrice,0).toFixed(2)
            }
        //父复选框控制子复选框
        case 'check_All':
            return {
                ...state,
                checkAll: !state.checkAll
            }
        case 'check_All_2':
            return {
                ...state,
                cartlist: state.cartlist.map(item =>{
                    console.log(action.isChecked)
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
                        item.isChecked = !item.isChecked
                    }
                    return item;
                })
            }
        case 'check_one_2':
            return {
                ...state,
                checkAll: ((state.cartlist.filter(item => item.isChecked == 1)).length == state.cartlist.length)?1:0,
                totalPrice: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count*item.goodsPrice,0).toFixed(2),
                step: (state.cartlist.filter(item => item.isChecked )).reduce((prev,item) => prev + item.count,0),
            }
        //删除
        case 'del_Goods':
            return {
                ...state,
                cartlistdemo: []
                //     let cartList = state.cartlistdemo;
                //     console.log(cartList)
                //     for (var g = 0; g < cartList.length; g++){
                //         for(var i = 0; i<action.goods_ids.length; i++){
                //             if(action.goods_ids[i] != cartList[g].goodsId){
                //                 cartList.push(cartList[g])
                //             } 
                //         }
                //     }
                //     console.log(cartList)
                //     // return cartList
                // })()
                // cartlistdemo: (()=>{
                //     let cartList = state.cartlistdemo;
                //     console.log(cartList)
                //     for (var g = 0; g < cartList.length; g++){
                //         for(var i = 0; i<action.goods_ids.length; i++){
                //             if(action.goods_ids[i] != cartList[g].goodsId){
                //                 cartList.push(cartList[g])
                //             } 
                //         }
                //     }
                //     console.log(cartList)
                //     // return cartList
                // })()

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