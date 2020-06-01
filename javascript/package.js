//一个个打印文字
function onePrint(word){
	var index=0;
	var word=word;
	function type(){		
		document.getElementById("bb").innerText = word.substring(0,index++);
	}setInterval(type, 180);
}
//输出换行(可以指定多少个元素换行)
function print(arr,leng,row){//数组,长度,行数
	for (var i=0;i<leng;i++) {
		var label =i+1;
		if(i%row!=row-1||i==0)
			document.write(label+"、"+arr[i]+"&nbsp&nbsp&nbsp");
		else
			document.write(label+"、"+arr[i]+"<br>");	
	}           		
}
//判断小数点的位置
function decimalPoint(num){
   var x = String(num).indexOf('.')+1;   //小数点的位置
   var y = String(num).length - x;  //小数的位数
   if(y > 0){
	alert('这个数是小数,有'+y+'位小数');
	return true;				    
   }else{
	return false;
   }
}		
//进制转换
function into(num){
   //十进制转其他
   var two = num.toString(2);
   var eight = num.toString(8);
   var six = num.toString(16);
   //其他转十进制
   parseInt(num,2);//二进制转十进制
   parseInt(num,8);//八进制转十进制
   parseInt(num,16);//十六进制转十进制
   //n进制转m进制
   document.write(parseInt(num,n).toString(m)+"<br>");
   //ASCII码转文本
   document.write(String.fromCharCode(parseInt(num,10))+"<br>")
}
