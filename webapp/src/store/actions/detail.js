
export function rdQty(qty){
   return {
       type:'rd_detail_qty',
       qty
   }
}

export function addQty(qty){
   return {
       type:'add_detail_qty',
       qty
   }
}

export function changeQty(qty){
   return {
      type:'change_detail_qty',
      qty
   }
}
export function addGoods(goodsInfo){
   return {
      type:'add_goodsInfo',
      goodsInfo
   }
}

export function addCart(goods){
   return {
       type:"ADD_TO_CART",
       goods
   }
}
export default{
   addQty,
   rdQty,
   changeQty,
   addCart
}