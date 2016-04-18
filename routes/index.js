/**
 * Created by Administrator on 2016/2/23.
 */
const exportController = require('lt-util').exportController;

const router = exportController(__dirname);

router.get('/', function* () {
  this.state.lang = 'en';
  this.render('index', {
    title: 'Women\'s Fashion Style Shopping Online | MakeMeChic.com'
  }, {
    top_banner: Promise.resolve(true),
    nav: Promise.resolve(true),
    index_banner: Promise.resolve(true),
    trending: Promise.resolve(true),
    best_seller: Promise.resolve(true),
    main_header: Promise.resolve(true),
    subscribe: Promise.resolve(true)
  });
});


module.exports = router;

