const express = require('express');

const AllRouter = require('./routers/index');

const app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    });

app.use(express.static('./'));
app.use(AllRouter);

app.listen(10086,(err)=>{
    if(err){
        throw new Error('err='+err);
    }
    console.log('姜太公钓鱼，愿者上钩，访问http://localhost:10086');
})