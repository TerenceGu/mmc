/**
 * Created by Administrator on 2016/2/23.
 */
const exportController = require('lt-util').exportController;

const router = exportController(__dirname);

router.get('/:id', function*() {
    this.state.lang = 'www';
    this.render('hello', {
        people: [
            {firstName: 'Yehuda', lastName: 'Katz' },
            {firstName: 'Carl', lastName: 'Lerche' },
            {firstName: 'Alan', lastName: 'Johnson'}
        ],
        name: this.req.url,
        lang: 'www'
    },{
        first: new Promise(resolve=>{
            setTimeout(() => {
                resolve({
                    text: 123
                })
            }, 100);
        })
    });
});

module.exports = router;
