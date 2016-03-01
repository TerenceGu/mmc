/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
module.exports = function langFactory(hbs) {
  hbs.registerHelper('list',
    (items, options) => {
      if (!items) {
        return '<ul></ul>';
      }
      let out = '<ul>';
      items.forEach(item => {
        out += ['<li>', options.fn(item), '</li>'].join('');
      });
      return out.concat('</ul>');
    });
};
