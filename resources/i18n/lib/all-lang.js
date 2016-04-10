/**
 * Created by fed on 16/4/7.
 */
/**
 * 获取所有的语言包,并导出为完整的语言包
 * 小语种对www有继承特性
 * 每个小语种最终在其index导出js即可
 */
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'langs');


function loadLanguage(language) {
  return require(path.join(baseDir, language));
}

function simpleCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const smallLanguages = fs.readdirSync(baseDir).filter(x => x !== 'www');
const commonLang = loadLanguage('www');

const allLanguages = {
  www: commonLang
};


smallLanguages.forEach(key => {
  allLanguages[key] = Object.assign(simpleCopy(commonLang), loadLanguage(key));
});

module.exports = allLanguages;

