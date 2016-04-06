/**
 * Created by fed on 16/4/6.
 */
'use strict';
const Readable = require('stream').Readable;
const co = require('co');

function component2scripts(key, value, lang) {
  return `<script>
window.reduxState.dispatch({type:'${key.toUpperCase()}_INIT', value:${JSON.stringify(value)}})
</script>\n
<script src='/component/${lang}/${key}.js' async="async"> </script>
  `
}

class RenderStream extends Readable {
  constructor(ctx, tpl, tplVariables, components) {
    super();
    this.ctx = ctx;
    this.tpl = tpl;
    this.components = components;
    this.tplVariables = tplVariables;
    this.render();
  }
  _read() {

  }
  render() {
    const ctx = this;
    co(function *() {
      yield ctx.ctx.renderHbs(ctx.tpl, ctx.tplVariables);
      ctx.push(ctx.ctx.state.body);
      yield Object.keys(ctx.components).map((key) => {
        return new Promise(resolve => {
          ctx.components[key].then(data => {
            ctx.push(component2scripts(key, data, ctx.ctx.state.lang));
            resolve(true);
          })
        })
      });
    }).then(() => {
      this.push('</body>\n</html>');
      this.push(null);
    }).catch(this.ctx.onerror);
  }
}

module.exports = function *(next) {
  this.render = (tpl, tplVariables, components) => {
    this.statusCode = 200;
    this.type = 'text/html';
    this.set('Transfer-Encoding', 'chunked')
    this.body = new RenderStream(this, tpl, tplVariables, components);
  };
  yield next;
}