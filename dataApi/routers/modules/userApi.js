const express = require('express');

const query = require('../../mysql');

const {create,verify} = require('./token');

const router = express.Router();

//检查用户名是否存在
router.get('/checkname',async (req,res)=>{
    let {username} = req.query;
    let inf = {};
    try{
        let sql = `select * from userinfo where username='${username}'`;
        let p = await query(sql);
        if(p.length){
            inf = {
                code:400,
                flag:false,
                message:'用户名已存在，不能注册'
            }
        }else {
            inf = {
                code:200,
                flag:true,
                message:'可以注册哦亲'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }

    res.send(inf);
})


// 注册
router.post('/register',async (req,res)=>{
    let {username,userpass} = req.body;
    let inf = {};
    try {
        let sql =  `insert into userinfo (username,userpass) value('${username}','${userpass}')`;
        let p = await query(sql);
        if(p.affectedRows){
            inf = {
                code:200,
                flag:true,
                message:'注册成功'
            }
        }else {
            inf = {
                code:400,
                flag:false,
                message:'注册失败'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }

    res.send(inf);
})

// 登录
router.get('/login',async (req,res)=>{
    let {username,userpass} = req.query;
    let inf = {};
    try{
        let sql = `select * from userinfo where username='${username}' and userpass='${userpass}'`;
        let p = await query(sql);
        console.log(p);
        if(p.length){
            let token = create(userpass);
            inf = {
                code:200,
                flag:true,
                message:'登录成功',
                data:{
                    token,
                    username:p[0].username,
                    userId:p[0].userId
                }
            }
        }else {
            inf = {
                code:400,
                flag:false,
                message:'登录失败'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }

    res.send(inf);
})

// token校验
router.get('/verify',(req,res)=>{
    let {token} = req.query;
    let result = verify(token);
    let inf = {};
    if(result){
        inf = {
            code:200,
            flag:true,
            message:'token校验成功'
        }
    }else {
        inf = {
            code:400,
            flag:false,
            message:'token校验失败'
        }
    }

    res.send(inf);
})

// 修改用户信息
router.put('/edit/:userId',async (req,res)=>{
    let obj = req.body;
    let str = '';
    for(let key in obj){
        if(key === 'sex' || key === 'age'){
            str += `${key}=${obj[key]},`
        }else {
            str += `${key}='${obj[key]}',`
        }
    }
    str = str.slice(0,-1);
    let id = req.params.userId;
    let inf = {};
    try{
        let sql = `update userinfo set ${str} where userId=${id}`;
        let p = await query(sql);
        if(p.affectedRows){
            inf = {
                code:200,
                flag:true,
                message:'修改成功'
            }
        }else {
            inf = {
                code:400,
                flag:false,
                message:'修改失败'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }

    res.send(inf);
})

// 删除某个用户的信息
router.delete('/del/:userId',async (req,res)=>{
    let id = req.params.userId;
    let inf = {};
    try {
        let sql = `delete from userinfo where userId=${id}`;
        let p = await query(sql);
        if(p.affectedRows){
            inf = {
                code:200,
                flag:true,
                message:'删除成功'
            }
        }else {
            inf = {
                code:400,
                flag:false,
                message:'删除失败'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }

    res.send(inf);
})

// 查询某个用户的信息
router.get('/findone/:userId',async (req,res)=>{
    let id = req.params.userId;
    let inf = {};
    try {
        let sql = `select * from userinfo where userId=${id}`;
        let p = await query(sql);
        if(p.length){
            inf = {
                code:200,
                flag:true,
                message:'查询成功',
                data:p
            }
        }else {
            inf = {
                code:400,
                flag:false,
                message:'查询失败'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }

    res.send(inf);
})


// 查询所有用户信息
router.get('/finduser',async (req,res)=>{
    let inf = {};
    try{
        let sql = `select * from userinfo`;
        let p = await query(sql);
        if(p.length){
            inf = {
                code:200,
                flag:true,
                message:'查询成功',
                data:p
            }
        }else {
            inf = {
                code:400,
                flag:false,
                message:'查询失败'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }

    res.send(inf);
})

// 通过ID或用户名查找对应的用户信息（含模糊查询）
router.get('/findsomeuser',async (req,res)=>{
    let {mes} = req.query;
    let inf = {};
    try{
        let sql = `select * from userinfo where userId like '%${mes}%' or username like '%${mes}%'`;
        let p = await query(sql);
        if(p.length){
            inf = {
                code:200,
                flag:true,
                message:'查询成功',
                data:p
            }
        }else {
            inf = {
                code:400,
                flag:false,
                message:'查询失败'
            }
        }
    }catch(err){
        inf = {
            code:err.errno,
            flag:false,
            message:err
        }
    }
    res.send(inf);
})
module.exports = router;