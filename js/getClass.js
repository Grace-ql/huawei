

function $(selector,range){
    var range=range||document;
    //判断是否为id
    if(typeof selector=="string"){ 
    if(selector.charAt(0)=="#"){
        return document.getElementById(selector.substr(1))
    }
    //判断类名
    if(selector.charAt(0)=="."){
           return getClass(selector.substr(1),range)
    }
    //判断标签名
    if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
          return range.getElementsByTagName(selector)
    }
}else if(typeof selector=="function"){
    
      window.onload=selector;
}
}
function getClass(classname,range){
	// document.getElementsByClassName('box',document)
	//判断当前
	if(range.getElementsByClassName){
	// alert("支持");
		return range.getElementsByClassName(classname)
	}else{
		var all=range.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < all.length; i++) {        			
		if(checkClass(all[i].className,classname)){
				arr.push(all[i]);
			}
		};
		return arr;
       alert(arr)
    // alert("不支持")
        	}
        }
    //返回值  true ||false 
    // box aa dd inner
    //兼容检测的当前元素的类名是否包含需要查找的类名
function checkClass(tagClass,aclass){
	var arr=tagClass.split(" ")
	for(var i = 0; i < arr.length; i++) {
    if(arr[i]==aclass){
        return  true;
      }
    }
        return false;
};
    //要checkClass想弹出，先传入两个参数，形参为变量，不加引号，而实参一般都加引号
    //alert(checkClass('aa bb inner cc aainner','inner'))
    //兼容获取文本设置和赋值
function  text(obj,val){
    //判断是否为空值，若为空，进行设置
    if(val==undefined){
    //获取
    if(obj.textContent!=undefined){
             //不支持
        return obj.textContent;
        }else{
            return obj.innerText;
        }
    }else{
    //设置
    if(obj.textContent!=undefined){
            obj.textContent=val;
        }else{
            obj.innerText=val;
        }
  }
}
    //兼容通用样式获取
    //obj 要获取样式的对象 attr 要获取对象的属性
    //border-width 可以写的   只能写一个属性
function getStyle(obj,attr){
     if(obj.currentStyle){
        return obj.currentStyle[attr];
     }else{
        return window.getComputedStyle(obj,null)[attr];
     }
}