/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
module.exports = function metaFactory(hbs) {
  hbs.registerHelper('dnsPrefetch',
    () => {
      let out = '';
      ['//img.makemechic.com'].forEach(domainName => {
        out += `<link rel="dns-prefetch" href="${domainName}">`;
      });
      return out;
    });

  const icon = '/favicon.ico';
  hbs.registerHelper('faviconIco',
    () => `<link rel="shortcut icon" href="${icon}">`);
};
