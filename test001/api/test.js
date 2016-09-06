//----------测试资源api---------------//

// 获取单个资源
exports.getSome = function(iResouceId) {
    var myResult = new Object(); // 定义返回对象
    myResult.code = 0; // 返回代码
    myResult.message = '成功！'; // 返回信息
    myResult.data = new Array(10); // 返回数组
    for(var i = 0; i < myResult.data.length; i++)
    {
        myResult.data[0] = new Object();
        myResult.data[0].id = i;
        myResult.data[0].name = '测试资源[' + i + ']';
    }
    return myResult;
}


// 获取单个资源
exports.getOne = function(iResouceId) {
    var myResult = new Object(); // 定义返回对象
    myResult.code = 0; // 返回代码
    myResult.message = '成功！'; // 返回信息
    myResult.data = new Object(); // 返回数据
    myResult.data.id = iResouceId;
    myResult.data.name = '测试资源[' + iResouceId + ']';
    return myResult;
}

