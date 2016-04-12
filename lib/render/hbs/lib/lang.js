/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
module.exports = function langFactory(hbs) {
  hbs.registerHelper('list',
    (items, options) => {
      if (!items) {
        return '';
      }
      let out ='';
      items.forEach(item => {
        out += options.fn(item);
      });
      return out;
    });
};
