export function login(username,password){
    return {
        type:"login",
        username,
        password
    }
}
export function logout(username,password){
    return {
        type:'logout',
        username,
        password
    }
}
export function getUserInfo(username){
    return {
        type:'getUserInfo',
        username
    }
}
export default{
    login,
    logout,
    getUserInfo
}