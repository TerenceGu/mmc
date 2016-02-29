/**
 * Created by aesop on 2016/2/29.
 */
const fs = require('fs');

module.exports.shallow = dirName => {
    const list = fs.readdirSync(dirName);
    return list.filter(x => !x.includes('index'));
}