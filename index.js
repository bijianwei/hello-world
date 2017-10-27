window.onload = function(){
  var oTop = document.getElementById("uptotop");
  var screenw = document.documentElement.clientWidth || document.body.clientWidth;
  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
  oTop.style.left = screenw - oTop.offsetWidth- 40 +"px";
  oTop.style.top = screenh - oTop.offsetHeight- 20 + "px";
  window.onscroll = function(){
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    oTop.style.top = screenh - oTop.offsetHeight-150 + scrolltop +"px";
  }
  oTop.onclick = function(){
    document.documentElement.scrollTop = document.body.scrollTop =0;
  }
  oTop.onmouseover = function(){
	  oTop.style.backgroundColor = "gray";
  }
  oTop.onmouseout = function(){
	  oTop.style.backgroundColor = "blue";
  }
}  