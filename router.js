function route(pathname, handle){
  console.log("路由接收来自url:"+ pathname +"的请求");

 	//检查给定的路径对应的请求处理程序是否存在  
  if(typeof handle[pathname] === 'function'){
  	//存在，直接调用相应的函数
  	setTimeout(function(){handle[pathname]()}, 3000);
    /*handle[pathname]();*/
  } else{
    console.log('对于' + pathname + '没有找到相应的处理程序！');
  }
}
exports.route = route;