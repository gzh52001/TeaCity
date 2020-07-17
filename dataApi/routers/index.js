const express = require('express');

const router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

const userRouter = require('./modules/userApi');
const shopRouter = require('./modules/shopApi');
const cartRouter = require('./modules/cartApi');

router.use('/user',userRouter);
router.use('/goods',shopRouter);
router.use('/cart',cartRouter);

module.exports = router;