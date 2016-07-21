// 注册api路由到Web应用
exports.routeApi = function(iWebApp){
    // 加载api管理器
    var myApiManager = require('./apiManager');
    // 创建api的基础方法
    // get--获取指定单个资源的信息
    iWebApp.get('/api/:resource/:id', function (req, res) {
        var myResource = req.params.resource; // 资源名称
        var myId = req.params.id; // 资源id
        var myApi = new Object(); // 定义要调用的api对象
        var myResult = new Object(); // 定义返回对象
        try {
            myApi = require('./api/' + myResource);
        }
        catch(e) {
            myResult.code = -404;
            myResult.message = '你查询的资源类型[' + myResource + ']不存在!';
            res.send(JSON.stringify(myResult)); // 返回结果
            return;
        }
        var myResult = myApi.getOne(myId); // 调用单个资源查询的方法
        res.send(JSON.stringify(myResult)); // 返回结果
    });
    // get--获取指定的一批资源的信息
    iWebApp.get('/api/:resource', function (req, res) {
        res.send('你的资源名称是：' + req.params.resource);
    });
    // post--添加资源
    iWebApp.post('/api/:resource', function (req, res) {
        res.send('你添加了一个【' + resource + '】资源。');
    });
    // put--修改资源
    iWebApp.put('/api/:resName/:resId', function (req, res) {
        res.send('你修改了Id为【' + resId + '】的' + resId + '资源。');
    });
    // delete--删除资源
    iWebApp.delete('/api/:resName/:resId', function (req, res) {
        res.send('你删除了Id为【' + resId + '】的【' + resId + '】资源。');
    });
};