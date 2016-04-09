/**
 * Created by Administrator on 2016/2/23.
 */
const exportController = require('lt-util').exportController;

const router = exportController(__dirname);

router.get('/www', function*() {
  this.state.lang = 'www';
  this.render('hello',{
    name: 'www user',
    title: 'hello, world!'
  },{
    todo_list: new Promise(resolve => {
      resolve({
        todoList: [
          'Drink a cup of coffee',
          'Call wife'
        ]
      });
    })
  });
});

router.get('/ru', function*() {
  this.state.lang = 'ru';
  this.render('hello',{
    name: 'ru user',
    title: 'hello, world!'
  },{
    todo_list: new Promise(resolve => {
      resolve({
        todoList: [
          'Drink a cup of coffee',
          'Call wife'
        ]
      });
    })
  });
});

module.exports = router;
