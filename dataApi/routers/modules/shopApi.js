const express = require('express');

const query = require('../../mysql');
const { response } = require('express');

const router = express.Router();

//查询所有商品信息
router.get('/findgoods', async (req, res) => {
    let inf = {};
    try {
        let sql = `select * from teadetailed`;
        let p = await query(sql);
        if (p.length) {
            inf = {
                code: 200,
                flag: true,
                message: '查询成功',
                data: p
            }
        } else {
            inf = {
                code: 400,
                flag: false,
                message: '查询失败'
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

// 通过指定类型查找对应商品，例如：输入白茶查找对应的白茶的商品
router.get('/findtype', async (req, res) => {
    let { title } = req.query;
    let inf = {};
    let arr = [];
    try {
        let sql = `select titlecontentId from teatitlecontent where titleId = (select titleId from teatitle where title='${title}')`;
        let p = await query(sql);
        for (let i = 0; i < p.length; i++) {
            let secondSql = `select * from teadetailed where teatitlecontentId=${p[i].titlecontentId}`;
            let p1 = await query(secondSql);
            if (p1.length) {
                arr.push(p1);
            }
        }
        if (arr.length) {
            inf = {
                code: 200,
                flag: true,
                message: '查询成功',
                data: arr
            }
        } else {
            inf = {
                code: 400,
                flag: false,
                message: '查询失败'
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

// 通过指定的茶的品种来查询对应的商品，例如输入普洱茶查询对应的普洱茶商品
router.get('/findbreed', async (req, res) => {
    let { titlecontent } = req.query;
    let inf = {};
    try {
        let sql = `select * from teadetailed where teatitlecontentId = (select titlecontentId from teatitlecontent where titlecontent='${titlecontent}')`;
        let p = await query(sql);
        if (p.length) {
            inf = {
                code: 200,
                flag: true,
                message: '查询成功',
                data: p
            }
        } else {
            inf = {
                code: 400,
                flag: false,
                message: '查询失败'
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

// 新增商品 (PS:此接口已对teatitlecontentId进行处理，直接输入对应的茶的品种名称即可)
router.get('/addgoods', async (req, res) => {
    let { teatitlecontentId, goodstitle, goodsImg, goodsDesc, goodsPrice, goodsPerson, goodsLogo, goodsBigImg } = req.query;
    let inf = {};
    try {
        if (isNaN(teatitlecontentId)) {
            let checkBreedSql = `select titlecontentId from teatitlecontent where text='${teatitlecontentId}'`;
            let checkp = await query(checkBreedSql);
            teatitlecontentId = checkp[0].titlecontentId;
        }
        let sql = `insert into teadetailed (teatitlecontentId,goodstitle,goodsImg,goodsDesc,goodsPrice,goodsPerson,goodsLogo,goodsBigImg) value(${teatitlecontentId},'${goodstitle}','${goodsImg}','${goodsDesc}',${goodsPrice},${goodsPerson},'${goodsLogo}',${goodsBigImg})`;
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
    } catch (err) {
        inf = {
            code: err.errno,
            flag: false,
            message: err
        }
    }
    res.send(inf);
})

// 修改商品
router.put('/edit/:goodsId',async (req,res)=>{
    let obj = req.body;
    let str = '';
    let inf = {};
    let id = req.params.goodsId;
    for(let key in obj){
        if(key === 'teatitlecontentId' || key === 'goodsPrice' || key === 'goodsPerson'){
            str += `${key}=${obj[key]},`;
        }else {
            str += `${key}='${obj[key]}',`;
        }
    }
    str = str.slice(0,-1);
    try{
        let sql = `update teadetailed set ${str} where goodsId=${id}`;
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

// 删除商品
router.delete('/del/:goodsId',async (req,res)=>{
    let id = req.params.goodsId;
    let inf = {};
    try{
        let sql = `delete from teadetailed where goodsId=${id}`;
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

// 对某一个品种的商品以价格升序排列  (从小到大)
router.get('/priceasc',async (req,res)=>{
    let {teatitlecontentId} = req.query;
    let inf = {};
    try{
        if(isNaN(teatitlecontentId)){
            let checkSql = `select titlecontentId from teatitlecontent where titlecontent='${teatitlecontentId}'`;
            let checkp = await query(checkSql);
            teatitlecontentId = checkp[0].titlecontentId;
        }

        let sql = `select * from teadetailed where teatitlecontentId=${teatitlecontentId} order by goodsPrice asc`
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

// 对某一个品种的商品以价格降序排列
router.get('/pricedesc',async (req,res)=>{
    let {teatitlecontentId} = req.query;
    let inf = {};
    try{
        if(isNaN(teatitlecontentId)){
            let checkSql = `select titlecontentId from teatitlecontent where titlecontent='${teatitlecontentId}'`;
            let checkp = await query(checkSql);
            teatitlecontentId = checkp[0].titlecontentId;
        }

        let sql = `select * from teadetailed where teatitlecontentId=${teatitlecontentId} order by goodsPrice desc`
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

// 对某一个品种的商品以人气升序排列
router.get('/personasc',async (req,res)=>{
    let {teatitlecontentId} = req.query;
    let inf = {};
    try{
        if(isNaN(teatitlecontentId)){
            let checkSql = `select titlecontentId from teatitlecontent where titlecontent='${teatitlecontentId}'`;
            let checkp = await query(checkSql);
            teatitlecontentId = checkp[0].titlecontentId;
        }

        let sql = `select * from teadetailed where teatitlecontentId=${teatitlecontentId} order by goodsPerson asc`
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

// 对某一个品种的商品以人气降序排列
router.get('/persondesc',async (req,res)=>{
    let {teatitlecontentId} = req.query;
    let inf = {};
    try{
        if(isNaN(teatitlecontentId)){
            let checkSql = `select titlecontentId from teatitlecontent where titlecontent='${teatitlecontentId}'`;
            let checkp = await query(checkSql);
            teatitlecontentId = checkp[0].titlecontentId;
        }

        let sql = `select * from teadetailed where teatitlecontentId=${teatitlecontentId} order by goodsPerson desc`
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

// 查询分类列表
router.get('/sort',async (req,res)=>{
    let inf = {};
    try{
        let sql = `select * from teatitlecontent`;
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
            code:false,
            message:err
        }
    }
    res.send(inf);
})

// 根据分类ID查询对应的名称
router.get('/sortId',async (req,res)=>{
    let {titleId} = req.query;
    let inf = {};
    try{
        let sql = `select title from teatitle where titleId = ${titleId}`;
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
// 通过二级分类的ID查找对应的商品列表
router.get('/goodsbyId', async(req,res)=>{
    let {teatitlecontentId} = req.query;
    let inf = {};
    try{
        let sql = `select * from teadetailed where teatitlecontentId = ${teatitlecontentId}`;
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

// 根据商品ID查找对应的商品信息
router.get('/goodsdetailById',async (req,res)=>{
    let {goodsId} = req.query;
    let inf = {};
    try{
        let sql = `select * from teadetailed where goodsId = ${goodsId}`;
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

// 查询一部分的数据
router.get('/getsomegoods',async (req,res)=>{
    let {state,count} = req.query;
    let inf = {};
    try{
        if(!state){
            state = 0;
        }
        let sql = `select * from teadetailed limit ${state},${count}`;
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

// 通过商品ID或者名称查找对应的商品（模糊查询）
router.get('/getlikegoods',async (req,res)=>{
    let {mes} = req.query;
    let inf = {};
    try{
        let sql = `select * from teadetailed where goodsId like '%${mes}%' or goodstitle like '%${mes}%'`;
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

// 通过二级分类查找对应的ID
router.get('/gettitlecon',async (req,res)=>{
    let {text} = req.query;
    let inf = {};
    try{
        let sql = `select titlecontentId from teatitlecontent where text = '${text}'`;
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