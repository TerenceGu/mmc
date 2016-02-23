/**
 * Created by Administrator on 2016/2/23.
 */
const mapJson = require('../front/dist/map');

const resourceMap = (function () {
  const result = {};
  Object.keys(mapJson.res).forEach(x => {
    result[x] = mapJson.res[x].uri;
  });
  return result;
}());

exports.get = x => resourceMap[x];
