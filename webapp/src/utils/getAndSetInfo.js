//获取信息
export function getInfo(value){
    return JSON.parse(localStorage.getItem(value));
}
// 存信息
export function setInfo(value,obj){
    localStorage.setItem(value,JSON.stringify(obj));
}

// export default {
//     getInfo,
//     setInfo
// }