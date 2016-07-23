// 注册api路由到Web应用
exports.routeApi = function(iWebApp){
    // 创建api的基础方法
    iWebApp.all('/api/:resource/:id?', function (req, res) {
        // 调用api基础控制器
        var myApiController = require('./apiController');
        // 通过api基础控制器调用对应的api
        var myResult = myApiController.callApi(req, res);
        // 返回结果
        return myResult;
    });
};