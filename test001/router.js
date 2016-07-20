exports.parse = function(input){ 
    if(null == input || '' == input) return {}; 
    // 去除 URL 末端的斜杠
    var str = removeSlashAtEnd(input), resIndex = str.indexOf('resources'); 
    if(resIndex == -1 || resIndex == str.length -9) return {};
    queryStrs = str.substr(resIndex + 10).split('/'); 
    // id = 0 表示列出所有资源
    if(queryStrs.length % 2 != 0){ 
        queryStrs.push('0'); 
    } 
    return  { 
        resource : queryStrs[0], 
        id : queryStrs[1] 
    };
};