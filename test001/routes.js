// 注册api路由到Web应用
exports.routeApi = function(iWebApp){
    // 加载api管理器
    var myApiManager = require('./apiManager');
    // 创建api的基础方法
    // get--获取指定单个资源的信息
    iWebApp.get('/api/:resName/:resId', function (req, res) {
        var myResName = req.params.resName;
        var myResId = req.params.resId;
        var myModel = new Object();
        try {
            myModel = require('./api/' + myResName);
        }
        catch(e) {
            res.send('你查询的资源不存在，资源名称是：' + req.params.resName + '，资源Id是：' + req.params.resId);
        }
        var myResult = myModel.getOne(myResId);
        res.send(JSON.stringify(myResult));
    });
    // get--获取指定的一批资源的信息
    iWebApp.get('/api/:resName', function (req, res) {
        res.send('你的资源名称是：' + req.params.resName);
    });
    // post--添加资源
    iWebApp.post('/api/:resName', function (req, res) {
        res.send('你添加了一个【' + resName + '】资源。');
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