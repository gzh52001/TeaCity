
const initState = {
    usrInfo: {},
    logined: false
};

function reducer (state=initState, action){
    switch(action.type){
        case "login":
            return {
                ...state,
                logined: true,
                usrInfo: action.usrInfo
            }
        default:
            return state
    }
    return state
}

export default reducer;