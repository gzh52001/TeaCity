
// 初始状态
const initState = {
    goodsInfo:{

    },
    qty: 1
}

// reducer
// 作用: 指定state的修改逻辑：创建一个新state的并返回（覆盖旧数据）
function reducer(state = initState, action) {
    switch (action.type) {

        // 详情减少数量
        case 'rd_detail_qty':
            return {
                qty: action.qty
            }
        // 详情添加数量
        case 'add_detail_qty':
            return {
                qty: action.qty
            }
        case 'change_detail_qty':
            return {
                qty: action.qty
            }
        case 'add_goodsInfo':
            return {
                goodsInfo: action.goodsInfo
            }
        default:
            return state;
    }
}

export default reducer;