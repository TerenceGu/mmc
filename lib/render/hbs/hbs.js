/**
 * Created by fed on 16/4/7.
 */
'use strict';

const config = require('../../../config').hbs;

const templateHelper = require('./template');
const registerPartials = require('./partials');

/**
 * file reader returning a thunk
 * @param filename {String} Name of file to read
 */

class Hbs {
  constructor() {
    this.handlebars = require('handlebars').create();
    this.Utils = this.handlebars.Utils;
    this.SafeString = this.handlebars.SafeString;
    this.registerHelper = this.handlebars.registerHelper.bind(this.handlebars);
    this.registerPartial = this.handlebars.registerPartial.bind(this.handlebars);
    registerPartials(this.handlebars);
  }

  createRenderer() {
    const hbs = this;
    return function *(tpl, passedLocals) {
      const locals = Object.assign(
        passedLocals || {},
        this.state || {},
        config.locals || {}
      );
      const { template, layoutTemplate } = yield templateHelper.getTemplate(tpl, hbs.handlebars);
      const templateOptions = Object.assign({
        data: Object.assign({ koa: this }, config.templateOptions.data || {})
      }, config.templateOptions);

      // Run the compiled templates
      locals.body = template(locals, templateOptions);
      return layoutTemplate(locals, templateOptions);
    };
  }

}

/**
 * expose default instance of `Hbs`
 */

exports = module.exports = new Hbs();

/**
 * expose method to create additional instances of `Hbs`
 */

exports.create = function () {
  return new Hbs();
};
