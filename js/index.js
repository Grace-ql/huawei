window.onload=function(){
	var box=getClass("banner_box",document);
	var mid=getClass("banner_mid",box[0])[0];
	var as=mid.getElementsByTagName('a');
	var btn=getClass("btn",document)[0]
	var lis=btn.getElementsByTagName('li')
	var index=0;
	var t=setInterval(move,1000)
	function move(){
		index++;
		if(index==as.length){index=0;}
          for (var i = 0; i <as.length; i++) {
          	as[i].style.display="none";
          	lis[i].style.background=""
          };
          as[index].style.display="block";
          lis[index].style.background="pink";
	}
	mid.onmouseover=function(){
		clearInterval(t)
	}
	mid.onmouseout=function(){
		t=setInterval(move,1000)
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i
		lis[i].onclick=function(){
             for (var j= 0; j < as.length; j++) {
             	as[j].style.display="none";
             	lis[j].style.background="";
             };
             as[this.index].style.display="block"
             lis[this.index].style.background="pink";
		}
	};
	var dianji=getClass("dianji",document)[0];
	var leftbtn=getClass("leftbtn",dianji)[0];
	var rightbtn=getClass("rightbtn",dianji)[0];
	leftbtn.onclick=function(){
		index--;
		if(index<0){
              index=as.length-1;
		}
		for (var i = 0; i < as.length; i++) {
			as[i].style.display="none";
			lis[i].style.background="";
		};
		   as[index].style.display="block";
		   lis[index].style.background="pink";
	}
	rightbtn.onclick=function(){
		move();
	}

}