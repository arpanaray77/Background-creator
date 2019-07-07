var c1= document.querySelector(".c1");
var c2=document.querySelector(".c2");
var h3=document.getElementsByTagName("h3");


var bd= document.getElementById("grad");
function setg() {
	bd.style.background="linear-gradient( to right,"+c1.value +","+c2.value+")";
h3.textContent= bd.style.background +";";
}
c1.addEventListener("input",setg);
c2.addEventListener("input",setg);
