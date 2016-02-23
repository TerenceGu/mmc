/**
 * Created by Administrator on 2016/2/23.
 */
const router = require('koa-router')();

router.get('/:id', function*() {
  this.body = 'hello, it\'s yuji!';
});

module.exports = router;
