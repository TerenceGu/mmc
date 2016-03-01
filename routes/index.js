/**
 * Created by Administrator on 2016/2/23.
 */
const exportController = require('lt-util').exportController;

const router = exportController(__dirname);

router.get('/i', function*() {
   yield this.render('hello',{
       name: 'i',
       lang: 'zh'
   });
});

module.exports = router;
