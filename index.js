var server = require("./server");//使用server模块
var router = require("./router");
//调用server下的公共方法
server.start(router.route);