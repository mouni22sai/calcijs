var butn = document.getElementsByClassName('btn-default');
var display = document.getElementById('input-bar');
//var butn5 = document.getElementsByClassName('btn-default')[5]

var val;
butn[0].onclick = function(){
	display.value = display.value.toString() + butn[0].textContent;
}
butn[1].onclick = function(){
	display.value = display.value.toString() + butn[1].textContent;
}
butn[2].onclick = function(){
	display.value = display.value.toString() + butn[2].textContent;
}
butn[3].onclick = function(){
	display.value = display.value.toString() + butn[3].textContent;
}
butn[4].onclick = function(){
	display.value = display.value.toString() + butn[4].textContent;
}
butn[5].onclick = function(){
	display.value = display.value.toString() + butn[5].textContent;
}
butn[6].onclick = function(){
	display.value = display.value.toString() + butn[6].textContent;
}
butn[7].onclick = function(){
	display.value = display.value.toString() + butn[7].textContent;
}
butn[8].onclick = function(){
	display.value = display.value.toString() + butn[8].textContent;
}
butn[9].onclick = function(){
	display.value = display.value.toString() + butn[9].textContent;
}
var flag;

butn[10].onclick = function(){
	val = Number(display.value);
	display.value = "";
	flag = 1;
}
butn[11].onclick = function(){
	val = Number(display.value);
	display.value = "";
	flag = 0;
}

butn[12].onclick =function(){
	if(flag){
       val += Number(display.value);
	}else{
		val -= Number(display.value);
	}

	display.value = val;
}




