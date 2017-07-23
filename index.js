var server = require("./server");//使用server模块
var router = require("./router");
var router = require("./router");

var reqHandlers = require("./requestHandlers");
//建立一个处理请求的function集合对象handle
var handle = {};

handle["/"] = reqHandlers.start;
handle["/start"] = reqHandlers.start;
handle["/upload"] = reqHandlers.upload;
//调用server下的公共方法
server.start(router.route, handle);//将路由函数和处理请求对象handle注入server.js