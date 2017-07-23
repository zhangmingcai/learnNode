var http = require('http');//使用内置nodejs内置的http模块
var urlPath = require("url");
function start(route){
  http.createServer(onRequest).listen(8888);
  console.log('服务器已经启动！');
  function onRequest(req,res){
  	var pathname = urlPath.parse(req.url).pathname;
  	route(pathname);
	  res.writeHead(200,{"Content-Type":"text/plain"});
	  res.write("Hello World");
	  res.end();
  }
}

exports.start = start;//将start这个功能开放出来，这样就能在index.js中使用它