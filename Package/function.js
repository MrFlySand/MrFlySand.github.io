//根据屏幕的高度调整元素的宽度
setInterval(function bodyWindow(){				
	var container = document.getElementById("container");
	var rightBox= document.getElementById("rightBox");
	var footLogo = document.getElementById("footLogo");
	var timers = document.getElementById("timers");
	var icons = document.getElementById("icons");
	var headTitle = document.getElementById("headTitle");
	var searchText = document.getElementById("searchText");
	var headIcon = document.getElementById("headIcon");
    var x = window.document.body.clientWidth;
    console.log(x)
    if(x < '1000'){
    	console.log(1)
    	container.style.width = "90%";
    	container.style.margin = "20px 15px";
    	rightBox.style.width = "90%";	
    	rightBox.style.margin = "15px 15px";
    	footLogo.style.left = "both";
    	footLogo.style.display = "block";
    	footLogo.style.margin = "0 auto";
    	icons.style.clear = "both";
    	icons.style.display = "block";
    	icons.style.margin = "10px auto";
    	timers.style.clear = "both";
    	timers.style.display = "block";
    	timers.style.margin = "10px auto";
//  	headTitle.style.height = "200px";
//  	headBox.style.display = "none";
    	headIcon.style.display = "block";
//  	if(x < '565'){
////		headTitle.style.height = "150px";
//  		headBox.style.display = "block";
//  		headIcon.style.display = "block";
//  	}
    }else{
    	console.log(2)
    	container.style.width = "65%";
    	rightBox.style.width = "25%";
    	rightBox.style.margin = "20px 10px 10px 10px";
    	footLogo.style.float = "left";
    	footLogo.style.display = "inline-block";
    	footLogo.style.margin = "0 80px";
    	icons.style.float = "left";
    	icons.style.display = "inline-block";
    	icons.style.margin = "50px 100px 20px 100px";
    	timers.style.float = "left";
    	timers.style.display = "inline-block";
    	timers.style.margin = "20px 100px 20px 100px";
    	headTitle.style.height = "200px";
    	headBox.style.display = "block";
    	headIcon.style.display = "none";    	
    }
},1000);



