const express = require('express');

const query = require('../../mysql');

const router = express.Router();

// 新增购物车 (PS：同一个用户添加同样的商品时，数量增加，不会重复添加商品)
router.get('/addcart', async (req, res) => {
    let { userId, username, goodsId, count, goodstitle, price } = req.query;
    let inf = {};
    let defaultCount = 0;
    try {
        let findAll = `select * from cart where userId=${userId} and goodsId=${goodsId}`;
        let findAllp = await query(findAll);
        if (findAllp.length) {
            defaultCount = parseInt(findAllp[0].count);
            let changeCountSql = `update cart set count=${defaultCount + parseInt(count)} where userId=${userId} and goodsId=${goodsId}`;
            let changeCountp = await query(changeCountSql);
            if (changeCountp.affectedRows) {
                inf = {
                    code: 200,
                    flag: true,
                    message: '添加成功'
                }
            } else {
                inf = {
                    code: 400,
                    flag: false,
                    message: '添加失败'
                }
            }
        } else {
            let sql = `insert into cart (userId,username,goodsId,count,goodstitle,price) value(${userId},'${username}',${goodsId},${count},'${goodstitle}','${price}')`;
            let p = await query(sql);
            if (p.affectedRows) {
                inf = {
                    code: 200,
                    flag: true,
                    message: '添加成功'
                }
            } else {
                inf = {
                    code: 400,
                    flag: false,
                    message: '添加失败'
                }
            }
        }

    } catch (err) {
        inf = {
            code: err.errno,
            flag: false,
            message: err
        }
    }

    res.send(inf);
})

// 修改购物车的某个商品  ！！！！（需提供userId和goodsId）！！！！
router.put('/edit', async (req, res) => {
    let obj = req.body;
    let inf = {};
    let str = '';
    for(let key in obj){
        if(key !== 'userId' && key !== 'goodsId'){
            if(key === 'count'){
                str += `${key}=${obj[key]},`
            }else {
                str += `${key}='${obj[key]}',`;
            }
        }
    }
    str = str.slice(0,-1);
    try{
        console.log(11);
        let sql = `update cart set ${str} where userId=${obj.userId} and goodsId=${obj.goodsId}`;
        console.log(sql);
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

// 查询所有购物车订单
router.get('/find',async (req,res)=>{
    let inf = {};
    try{
        let sql = `select * from cart`;
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

// 查询指定用户的购物车订单
router.get('/findone',async (req,res)=>{
    let {userId} = req.query;
    let inf = {};
    try{
        let sql = `select * from cart where userId = ${userId}`;
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


// 删除某个用户的订单 ！！！！（需提供userId和goodsId,且只需要这两个）！！！！
router.delete('/del',async (req,res)=>{
    let {userId,goodsId} = req.query;
    let inf = {};
    try{
        let sql = `delete from cart where userId=${userId} and goodsId=${goodsId}`;
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

// 通过用户ID或者用户名称查询对应的购物车订单
router.get('/getlikedata',async (req,res)=>{
    let {mes} = req.query;
    let inf = {};
    try{
        let sql = `select * from cart where userId like '%${mes}%' or username like '%${mes}%'`;
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