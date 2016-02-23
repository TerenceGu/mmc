/**
 * Created by Administrator on 2016/2/23.
 */
const router = require('koa-router')();

const user = require('./user');

router.use('/user', user.routes());

module.exports = router;
