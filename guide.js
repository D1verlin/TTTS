let one = document.querySelectorAll("#one");
let two = document.querySelectorAll("#two");
let three = document.querySelectorAll("#three");
let four = document.querySelectorAll("#four");

function Red(x,y) {
		x[y].innerHTML = "X";
		x[y].style.cssText = 'border-color:var(--red);color:var(--red);';
}

function Green(x,y) {
		x[y].innerHTML = "0";
		x[y].style.cssText = 'border-color:var(--green);color:var(--green);';
}

function Void(x,y) {
		x[y].style.cssText = 'opacity:15%;';
}

function Clear(x) {
	for (var i = x.length - 1; i >= 0; i--) {
		x[i].innerHTML = "";
		x[i].style.cssText = '';
	}
}

function Void_3x3(x) {Void(x,3);Void(x,7);Void(x,11);Void(x,12);Void(x,13);Void(x,13);Void(x,14);Void(x,15);}
let clock = 1000; // time between animation frames

function Triple_01() {Void_3x3(one);Red(one,0);Red(one,4);Red(one,8);}
function Triple_02() {Clear(one);Void_3x3(one);Green(one,4);Green(one,5);Green(one,6);}
function Triple_03() {Clear(one);Void_3x3(one);Red(one,0);Red(one,5);Red(one,10);}
function Triple_04() {Clear(one);Void_3x3(one);Green(one,2);Green(one,5);Green(one,8);}
function Triple_05() {Clear(one);Red(one,0);Red(one,4);Red(one,8);}
function Triple_06() {Clear(one);Green(one,4);Green(one,5);Green(one,6);}
function Triple_07() {Clear(one);Red(one,5);Red(one,10);Red(one,15);}
function Triple_08() {Clear(one);Green(one,7);Green(one,10);Green(one,13);}

function Triple() {
	Clear(one);
	window.setTimeout(Triple_01,clock);
	window.setTimeout(Triple_02,clock*2);
	window.setTimeout(Triple_03,clock*3);
	window.setTimeout(Triple_04,clock*4);
	window.setTimeout(Triple_05,clock*5);
	window.setTimeout(Triple_06,clock*6);
	window.setTimeout(Triple_07,clock*7);
	window.setTimeout(Triple_08,clock*8);
	window.setTimeout(Triple,clock*9);
}

function Double_01() {Void_3x3(two);Red(two,0);Red(two,4);}
function Double_02() {Clear(two);Void_3x3(two);Green(two,4);Green(two,5);}
function Double_03() {Clear(two);Void_3x3(two);Red(two,0);Red(two,5);}
function Double_04() {Clear(two);Void_3x3(two);Green(two,2);Green(two,5);}
function Double_05() {Clear(two);Red(two,0);Red(two,4);}
function Double_06() {Clear(two);Green(two,4);Green(two,5);}
function Double_07() {Clear(two);Red(two,5);Red(two,10);}
function Double_08() {Clear(two);Green(two,7);Green(two,10);}

function Double() {
	Clear(two);
	window.setTimeout(Double_01,clock);
	window.setTimeout(Double_02,clock*2);
	window.setTimeout(Double_03,clock*3);
	window.setTimeout(Double_04,clock*4);
	window.setTimeout(Double_05,clock*5);
	window.setTimeout(Double_06,clock*6);
	window.setTimeout(Double_07,clock*7);
	window.setTimeout(Double_08,clock*8);
	window.setTimeout(Double,clock*9);
}

function Fourth_01() {Red(three,0);Red(three,4);Red(three,8);Red(three,12);}
function Fourth_02() {Clear(three);Green(three,4);Green(three,5);Green(three,6);Green(three,7);}
function Fourth_03() {Clear(three);Red(three,0);Red(three,5);Red(three,10);Red(three,15);}
function Fourth_04() {Clear(three);Green(three,3);Green(three,6);Green(three,9);Green(three,12);}

function Fourth() {
	Clear(three);
	window.setTimeout(Fourth_01,clock);
	window.setTimeout(Fourth_02,clock*2);
	window.setTimeout(Fourth_03,clock*3);
	window.setTimeout(Fourth_04,clock*4);
	window.setTimeout(Fourth,clock*5);
}

// Sort

let sort_btn = document.querySelectorAll("#sort_btn");

let comb = document.querySelector("#combinations");
let sett = document.querySelector("#settings");
let gam = document.querySelector("#gamemodes");



/* 0 - Select all 1 - Combinations 2 - Settings 3 - Gamemodes */

sort_btn[0].onclick = function() {
	sort_btn[0].classList.add("btn-active");
	sort_btn[1].classList.remove("btn-active");
	sort_btn[2].classList.remove("btn-active");
	sort_btn[3].classList.remove("btn-active");
	comb.style.display = "block";
	sett.style.display = "block";
	gam.style.display = "block";
}

sort_btn[1].onclick = function() {
	sort_btn[0].classList.remove("btn-active");
	sort_btn[1].classList.add("btn-active");
	sort_btn[2].classList.remove("btn-active");
	sort_btn[3].classList.remove("btn-active");
	comb.style.display = "block";
	sett.style.display = "none";
	gam.style.display = "none";
}

sort_btn[2].onclick = function() {
	sort_btn[0].classList.remove("btn-active");
	sort_btn[1].classList.remove("btn-active");
	sort_btn[2].classList.add("btn-active");
	sort_btn[3].classList.remove("btn-active");
	comb.style.display = "none";
	sett.style.display = "block";
	gam.style.display = "none";
}

sort_btn[3].onclick = function() {
	sort_btn[0].classList.remove("btn-active");
	sort_btn[1].classList.remove("btn-active");
	sort_btn[2].classList.remove("btn-active");
	sort_btn[3].classList.add("btn-active");	
	comb.style.display = "none";
	sett.style.display = "none";
	gam.style.display = "block";
}


window.onload = function() {
	Triple();
	Double();
	Fourth();
}