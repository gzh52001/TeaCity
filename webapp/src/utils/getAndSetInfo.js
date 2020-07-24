//获取信息
export function getInfo(value){
    console.log(localStorage.getItem(value));
    return localStorage.getItem(value);
}
// 存信息
export function setInfo(value,obj){
    localStorage.setItem(value,JSON.stringify(obj));
}

// export default {
//     getInfo,
//     setInfo
// }