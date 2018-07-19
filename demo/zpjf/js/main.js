window.onload = function() {
	var oDiv = document.getElementById("main");
	var oUl = oDiv.getElementsByTagName("ul")[0];
	var oLi = oUl.getElementsByTagName("li");
	oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
	oUl.style.width = ((oLi[0].offsetWidth + 20) * oLi.length) + "px";
    
	var iNow = 0;

	//控制滚动的方向
	var Prev = document.getElementById("prev");
	var Next = document.getElementById("next");

	moveLeft = function(obj, old, now) {
	 
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var iSpeed = (now - old) / 10;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if (now == old) {
				clearInterval(obj.timer);
			} else {
				old += iSpeed;
				obj.style.left = old + 'px';
			}
		}, 20);
	};

	Prev.onclick = function() {
		if (iNow == 0) {
			iNow = oLi.length / 2;
           oUl.style.left = (-oUl.offsetWidth / 2) + 'px';
		}
	 
 
		
		moveLeft(oUl, -iNow * (oLi[0].offsetWidth), -(iNow - 1) * (oLi[0].offsetWidth+20));
		iNow--;
		console.log(-(iNow - 1) * (oLi[0].offsetWidth+20));
	  
	}
	
	 
	
	Next.onclick = tab;
       var  timer=setInterval(tab,3000);
       
       //移入清楚轮播
	Prev.onmouseover=function(){
		
			clearInterval(timer);
	}
	Prev.onmouseout=function(){
		
		 timer=setInterval(tab,1000);
	}
	Next.onmouseover=function(){
		
			clearInterval(timer);
	}
	Next.onmouseout=function(){
		
		 timer=setInterval(tab,1000);
	}
	
	function tab() {
		if (iNow == oLi.length / 2) {
			iNow = 0;
			oUl.style.left = 0;
		}

		moveLeft(oUl, -iNow * (oLi[0].offsetWidth + 20), -(iNow + 1) * (oLi[0].offsetWidth + 20));
		      
		iNow++;
	};
	
	
//	var  Onav=document.getElementById('nav-hd');
//	
//	Onav.onmouseover=function(){
//		this.className='active';
//	}
//	Onav.onmouseout=function(){
//		this.className='';
//		
//	}

};