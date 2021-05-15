function increaseFontSize(objId) {
obj = document.getElementById(objId);
currentSize = parseFloat(obj.style.fontSize);
obj.style.fontSize = (currentSize + .1) + "em";
}

function decreaseFontSize(objId) {
obj = document.getElementById(objId);
currentSize = parseFloat(obj.style.fontSize);
obj.style.fontSize = (currentSize - .1) + "em";
}

function over1(){
	document.getElementById("D_student_1").style.visibility = "visible";
}

function out1(){
	document.getElementById("D_student_1").style.visibility = "hidden";	
}

function over2(){
	document.getElementById("D_student_2").style.visibility = "visible";
}

function out2(){
	document.getElementById("D_student_2").style.visibility = "hidden";	
}

function over3(){
	document.getElementById("D_student_3").style.visibility = "visible";
}

function out3(){
	document.getElementById("D_student_3").style.visibility = "hidden";	
}

function over4(){
	document.getElementById("D_student_4").style.visibility = "visible";
}

function out4(){
	document.getElementById("D_student_4").style.visibility = "hidden";	
}
