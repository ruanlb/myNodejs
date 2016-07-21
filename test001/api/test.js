//----------测试资源api---------------//

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

