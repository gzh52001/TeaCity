const express = require('express');

const AllRouter = require('./routers/index');

const app = express();

app.use(express.static('./'));
app.use(AllRouter);

app.listen(10086,(err)=>{
    if(err){
        throw new Error('err='+err);
    }
    console.log('姜太公钓鱼，愿者上钩，访问http://localhost:10086');
})