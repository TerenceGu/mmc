/**
 * Created by fed on 16/4/7.
 */
module.exports = raw => {
  const result = {};
  function obj2plain(obj, path, result) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'string') {
        result[`${path}${key}`] = obj[key];
      }
      else {
        obj2plain(obj[key], `${path}${key}.`, result);
      }
    });
  }

  obj2plain(raw, '', result);
  return result;
};


