<<<<<<< HEAD
// 加载express并创建应用
var myExpress = require('express');
var myApp = myExpress();
// 添加静态页面路径
myApp.use(myExpress.static('./public'));
// 加载路由表并注册api路由到到应用
var myApiManager =  require('./apiManager');
myApiManager.routeApi(myApp);

// 启动服务
var myServer = myApp.listen(8081, function () {
    var myHost = myServer.address().address;
    var myPort = myServer.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", myHost, myPort);
});
=======
do non;
sdjfasdjf 
asdjfa sdjfasdjf
>>>>>>> 822b751efcace890e1ccce74bc657cb686b929c3
