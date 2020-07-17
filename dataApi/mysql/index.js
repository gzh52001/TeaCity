const mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'react_project_tea',
    port:3306,
    multipleStatements:true
})

function query(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}

module.exports = query;


