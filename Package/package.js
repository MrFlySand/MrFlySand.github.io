//一个个打印文字
function onePrint(word){
	var index=0;
	function type(){		
		document.getElementById("").innerText = word.substring(0,index++);
	}setInterval(type, 180);
}
//文本框前的标号,html显示代码块
//function code(id){
//	var word = "";			
//	var height = $(id).height();			
//	for (var i = j = 1;j <= height; i++, j += 32) {
//		word = word + i + "</br>"; 
//	}
//	$(id).prev().html(word);
//	$(id).prev().css("height",height);
//}
//计时器
function customize(int year, int month, int day){
   if(month<1 || month>12 || day<1 || day>31) return -1;
   int arrDate[] = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334};
   int sum=arrDate[month-1]+day;
   if(month>=3 && year%4==0 && year%100!=0 || year%400==0){
      return sum+1;
   }else{
      return sum;
   }
}
function timer(y,mo,d,h,mi,id){
 var nowDate = new Date;
	var year = nowDate.getFullYear();
	var mon = nowDate.getMonth()+1;
	var dat = nowDate.getDate();
	var hou = nowDate.getHours(); 
	var min = nowDate.getMinutes();
	var seco = nowDate.getSeconds();
	year = year - y;
	if (mon >= mo){
		dat = customize(mon) - customize(mo) + dat - d;
	} else{
		year--;
		dat = 334 - customize(mo) + customize(mon) + d;
	}
	if(hou >= h){
		hou = hou - h;
	}else{						
		if (hou > h ) {
			dat--;
			hou = 60+hou-h;
		} else{
			dat--;
			hou = 24+hou-h;
		}
	}
	if (min >= mi) {
		min = min - mi;
	} else{
		hou--;
		min = 60+min-mi;
	}
    id.innerHTML= year+"年"+dat+"天"+hou+"小时"+min+"分钟"+seco+"秒";
    },1000);
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
