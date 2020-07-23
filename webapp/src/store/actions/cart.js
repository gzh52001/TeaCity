export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const CHANGE_QTY = 'CHANGE_QTY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function defaultList(defaultList){
   return {
       type:"default_List",
       defaultList
   }
}

export function addToCart(goods){
   return {
       type:ADD_TO_CART,
       goods
   }
}
export function change(goodsId,count,userId){
   return {
       type:CHANGE_QTY,
       goodsId,
       count,
       userId
   }
}

export function clearAll(){
   return {
       type:CLEAR_CART,
   }
}

export function remove(goods_id){
   return {
       type:REMOVE_FROM_CART,
       goods_id
   }
}

export function total_Price(goods_id){
   return {
       type:'total_Price',
       goods_id
   }
}
export function checkAll(con){
   return {
       type:'check_All',
       con
   }
}
export function checkAll2(isChecked){
   return {
       type:'check_All_2',
       isChecked
   }
}
export function checkOne(goods_id){
   return {
       type:'check_one',
       goods_id
   }
}
export function checkOne2(){
   return {
       type:'check_one_2',
   }
}
export function delGoods(goods_id){
   return {
       type:'del_Goods',
       goods_id
   }
}
export function delBtn(){//控制计算或删除开关
   return {
       type:'del_Btn',
   }
}
export default{
   addToCart,
   change,
   remove,
   clearAll,
   total_Price,
   defaultList,
   checkAll,
   checkAll2,
   checkOne,
   checkOne2,
   delGoods,
   delBtn
}