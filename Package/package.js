//如果是手机,则body宽度100%
//function bodyWindow(a){
//  var x = window.document.body.clientWidth;
//  var id = id;
//  console.log(x)
//  if(x < 700){
//  	id.style.width = "100%";
//  }
//}
//一个个打印文字
function onePrint(word){
	var index=0;
	function type(){		
		document.getElementById("").innerText = word.substring(0,index++);
	}setInterval(type, 180);
}
//文本框前的标号,html显示代码块
function code(id){
	var word = "";			
	var height = $(id).height();			
	for (var i = j = 1;j <= height; i++, j += 32) {
		word = word + i + "</br>"; 
	}
	$(id).prev().html(word);
	$(id).prev().css("height",height);
}
//计时器
function timer(y,mo,d,h,mi,id){
setInterval(function(){
	function customize(month){
		switch (month){
		 	case 1: return 0;
		 	case 2: return 31;
		 	case 3: return 59;
		 	case 4: return 90;
		 	case 5: return 120;
		 	case 6: return 151;
		 	case 7: return 181;
			case 8: return 212;
			case 9: return 243;
			case 10: return 273;
			case 11: return 304;
			case 12: return 334;
		}
	}
    var now = new Date();
    var myDate = new Date;
	var year = myDate.getFullYear();
	var mon = myDate.getMonth()+1;
	var dat = myDate.getDate();
	var hou = myDate.getHours(); 
	var min = myDate.getMinutes();
	var seco = myDate.getSeconds();
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
