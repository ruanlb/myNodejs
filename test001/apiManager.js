// api模块加载
exports.loadApi = function(iApiName){
    var myModel = new Object();
    try {
        myModel = require('./api/' + myResName);
    }
    catch(e) {
        res.send('你的资源名称是：' + req.params.resName + '，资源Id是：' + req.params.resId);
    }
    var myResult = myModel.getOne(myResId);
    return myModel;
};
// 注册过滤器
exports.registerFilter = function(iFilterName){
    
};