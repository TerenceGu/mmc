/**
 * Created by Administrator on 2016/2/23.
 */
const exportController = require('lt-util').exportController;

const router = exportController(__dirname);

router.get('/i', function*() {
  this.state.lang = 'www';
  this.render('hello',{
    name: 'i',
    lang: 'www'
  },{
    first: new Promise(resolve=>{
      setTimeout(() => {
        resolve({
          text: 123
        });
      }, 1000);
    })
  });
});

router.get('/ii', function*() {
  this.state.lang = 'ru';
  this.render('hello',{
    name: 'i',
    lang: 'ru'
  },{
    first: new Promise(resolve=>{
      setTimeout(() => {
        resolve({
          text: 123
        });
      }, 1000);
    })
  });
});

module.exports = router;
