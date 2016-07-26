// 调用api
exports.callApi = function(req, res){
    var myResource = req.params.resource; // 资源名称
    var myAction = req.method; // 访问资源的方法
    var myId = req.params.id; // 资源id
    var myApi = new Object(); // 定义要调用的api对象
    var myResult = new Object(); // 定义返回对象
    // 加载指定api模块
    try {
        myApi = require('./api/' + myResource);
    }
    catch(e) {
        myResult.code = -1001;
        myResult.message = '你指定的资源类型[' + myResource + ']不存在！';
        res.status(404).json(myResult); // 返回结果
        return;
    }
    // 根据携带的参数调用对应的方法
    try {
        myResult = exports.doAction(myApi, req, res);
    }
    catch(e) {
        myResult.code = -1002;
        myResult.message = '你指定的资源类型[' + myResource + ']不支持[' + myAction + ']方法！';
        res.status(404).json(myResult); // 返回结果
        return;
    }
    res.json(myResult); // 返回结果
};
// 执行api的方法
exports.doAction = function(iApi, req, res){
    var myResource = req.params.resource; // 资源名称
    var myAction = req.method; // 访问资源的方法
    var myId = req.params.id; // 资源id
    var myApi = iApi; // 定义要调用的api对象
    var myResult = new Object(); // 定义返回对象
    if(myId) {
        // 有Id的访问
        if(myAction == 'GET') {
            // 单资源查询
            myResult = myApi.getOne(myId);
        }
        else if(myAction == 'PUT') {
            // 添加指定Id的资源
            myResult = myApi.add(req.body, myId);
        }
        else if(myAction == 'POST') {
            // 修改指定Id的资源
            myResult = myApi.modify(myId);
        }
        else if(myAction == 'DELETE') {
            // 删除指定资源
            myResult = myApi.modify(myId);
        }
    }
    else {
        // 无Id的访问
        if(req.method == 'GET') {
            // 多条件查询
            myResult = myApi.getSome(req.query);
        }
        else if(myAction == 'PUT') {
            // 添加资源，由系统分配Id
            myResult = myApi.add(req.body);
        }
        else if(myAction == 'POST') {
            // 批量修改资源
            myResult = myApi.modifySome(req.query, req.body);
        }
        else if(myAction == 'DELETE') {
            // 批量删除资源
            myResult = myApi.deleteSome(req.query, req.body);
        }            
    }
    return myResult;
};
// 注册过滤器
exports.registerFilter = function(iFilterName){
    
};