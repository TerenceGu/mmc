/**
 * Created by fed on 16/4/7.
 */
//  用于将形式为 { a: { b : { c : 1} } }
//  处理为{ 'a.b.c' : 1 }
//  如果不对参数
module.exports = raw => {
  const result = {};
  function obj2plain(obj, path) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'string') {
        result[`${path}${key}`] = obj[key];
      } else {
        obj2plain(obj[key], `${path}${key}.`);
      }
    });
  }

  obj2plain(raw, '');
  return result;
};

