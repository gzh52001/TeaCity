
const initState = {
    order: {},
    logined: false
};

function reducer (state=initState, action){
    // switch(action.type){
    //     case "getUserInfo":
    //         return {
    //             ...state,
    //             logined: true,
    //             usrInfo: action.usrInfo
    //         }
    //     default:
    //         return state
    // }
    return state
}

export default reducer;