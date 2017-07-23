var http=require('http');//使用内置nodejs内置的http模块
function start(){
    function onRequest(request,response){
    console.log('接收到请求！');
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('服务器已经启动！');
}

exports.start=start;//将start这个功能开放出来，这样就能在index.js中使用它