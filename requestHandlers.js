function start(){
  console.log("处理'start'请求已被唤醒！");
}
function upload(){
  console.log("处理'upload'请求已被唤醒！");
}

//开放API
exports.start = start;
exports.upload = upload;