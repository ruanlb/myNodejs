var myExpress = require('express');
var myApp = myExpress();

// 添加静态页面路径
myApp.use(express.static('./public'));

// 创建api的基础方法
// get--获取指定单个资源的信息
myApp.get('/api/:resName/:resId', function (req, res) {
   res.send('你的资源名称是：' + resName + '，资源Id是：' + resId);
});
// get--获取指定的一批资源的信息
myApp.get('/api/:resName', function (req, res) {
   res.send('你的资源名称是：' + resName);
});
// post--添加资源
myApp.post('/api/:resName', function (req, res) {
   res.send('你添加了一个【' + resName + '】资源。');
});
// put--修改资源
myApp.put('/api/:resName/:resId', function (req, res) {
   res.send('你修改了Id为【' + resId + '】的' + resId + '资源。');
});
// delete--删除资源
myApp.delete('/api/:resName/:resId', function (req, res) {
   res.send('你删除了Id为【' + resId + '】的【' + resId + '】资源。');
});

// 启动服务
var myServer = myApp.listen(8081, function () {
    var myHost = myServer.address().address;
    var myPort = myServer.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", myHost, myPort);
});