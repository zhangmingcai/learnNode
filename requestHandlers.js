function start(res){
  console.log("处理'start'请求已被唤醒！");
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Hello World");
  res.end();
}
function upload(res){
  console.log("处理'upload'请求已被唤醒！");
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Hello World");
  res.end();
}

//开放API
exports.start = start;
exports.upload = upload;