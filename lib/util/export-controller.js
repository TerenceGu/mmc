/**
 * Created by aesop on 2016/2/29.
 */
const shallow = require('./all-file').shallow;
const routerFactory = require('koa-router');



module.exports = function exportControllers(controllerFolder){
    console.log(module);
    const router = routerFactory();
    shallow(controllerFolder).forEach(controllerName =>
        router.use('/'.concat(controllerName), require(controllerFolder.concat('/').concat(controllerName)).routes())
    );
    return router;
}
