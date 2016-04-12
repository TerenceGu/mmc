/**
 * Created by fed on 16/4/10.
 */
'use strict';
// 核心思路, 继承的函数只能在模板里面出现
// 所以只需要将contentFor里面的存到数组里
// 在layout渲染的时候, 调用block时取出来即可
module.exports = function (hbs) {
  const blocks = {};
  /**
   * block helper delegates to this function to retreive content
   */

  function readBlockContent(name) {
    // val = block.toString
    const val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
  }

  /**
   * The contentFor helper delegates to here to populate block content
   */

  function content(name, options, context) {
    // fetch block
    const block = blocks[name] || (blocks[name] = []);
    // render block and save for layout render
    block.push(options.fn(context));
  }

  hbs.registerHelper('block', function (name, options) {
    // instead of returning self.block(name), render the default content if no
    // block is given
    let val = readBlockContent(name);
    if (val === '' && typeof options.fn === 'function') {
      val = options.fn(this);
    }
    return val;
  });
  // contentFor helper
  hbs.registerHelper('contentFor', function (name, options) {
    content(name, options, this);
    return '';
  });
};
