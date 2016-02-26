/**
 * Created by Administrator on 2016/2/23.
 */
const router = require('koa-router')();

router.get('/:id', function*() {
    yield this.render('hello', {
        people: [
            {firstName: 'Yehuda', lastName: 'Katz' },
            {firstName: 'Carl', lastName: 'Lerche' },
            {firstName: 'Alan', lastName: 'Johnson' },
        ],
        name: this.req.url,
        lang: 'en'
    });
});

module.exports = router;
