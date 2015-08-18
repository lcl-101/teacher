/*
	each(num,fn)
	参数：
	num 循环次数
    fn  执行代码   function(i){}  i 接收变化值
*/
function each(num,fn){
	for(var i=0;i<num;i++){
		fn(i);
	}
}
