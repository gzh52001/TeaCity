const jwt = require('jsonwebtoken');

let sectet = 'alice';
function create(data,expiresIn = 60*60*24*7){
    let token = jwt.sign({data},sectet,{expiresIn});

    return token;
}

function verify(token){
    let res;
    try{
        let result = jwt.verify(token,sectet);
        res = true;
    }catch(err){
        res = false;
    }

    return res;
}

module.exports = {
    create,
    verify
}