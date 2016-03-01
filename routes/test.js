/**
 * Created by Administrator on 2016/3/1.
 */
const router = require('koa-router')();

router.get('/', function*(){
    this.body = 'This is a test!';
});

module.exports = router;