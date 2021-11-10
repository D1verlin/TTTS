/*
Tic-Tac-Toe grid

[b1][b2][b3]
[b4][b5][b6]
[b7][b8][b9]

*/

// Start Other-Settings


function checkbox_checked() {
	let checkbox = document.querySelectorAll('.other_elm');
	let togglebtn = document.querySelectorAll('.other_radio');
	
	if ( checkbox[0].checked == true ) {
		// console.log(checkbox[0] , 'Checked!');
		togglebtn[0].classList.add('btn-active');
		localStorage.setItem('Auto_Round', true);
	} else if ( checkbox[0].checked == false ) {
		// console.log(checkbox[0] , 'Unchecked!');
		togglebtn[0].classList.remove('btn-active');
		localStorage.setItem('Auto_Round', false);
	}

	if ( checkbox[1].checked == true ) {
		// console.log(checkbox[1] , 'Checked!');
		togglebtn[1].classList.add('btn-active');
		localStorage.setItem('my_turn', true);
	} else if ( checkbox[1].checked == false ) {
		// console.log(checkbox[1] , 'Unchecked!');
		togglebtn[1].classList.remove('btn-active');
		localStorage.setItem('my_turn', false);
	}

}


function Auto_Round() {
	if (localStorage.Auto_Round == 'true') {
		Next_Round();
	}
}




// End Other-Settings

let flag = "X";
const flags = () => `${flag}`;
		if (flag == "X") {			
			document.getElementById('print').innerHTML = flags();
			document.getElementById('print').style.color = 'var(--red)';
		}
		else {
			document.getElementById('print').innerHTML = flags();
			document.getElementById('print').style.color = 'var(--green)';

		}
	const twocells = [
	{ "id":0, "status":0 },
	{ "id":1, "status":0 },
	{ "id":2, "status":0 },
	{ "id":3, "status":0 },
	{ "id":4, "status":0 },
	{ "id":5, "status":0 },
	{ "id":6, "status":0 },
	{ "id":7, "status":0 },
	{ "id":8, "status":0 },
	{ "id":9, "status":0 },
	{ "id":10, "status":0 },
	{ "id":11, "status":0 }, 
	{ "id":12, "status":0 },
	{ "id":13, "status":0 },
	{ "id":14, "status":0 },
	{ "id":15, "status":0 },
	{ "id":16, "status":0 },
	{ "id":17, "status":0 },
	{ "id":18, "status":0 },
	{ "id":19, "status":0 },
	{ "id":20, "status":0 },
	{ "id":21, "status":0 },
	{ "id":22, "status":0 },
	{ "id":23, "status":0 },
	{ "id":24, "status":0 },
	{ "id":25, "status":0 },
	{ "id":26, "status":0 },
	{ "id":27, "status":0 },
	{ "id":28, "status":0 },
	{ "id":29, "status":0 },
	{ "id":30, "status":0 },
	{ "id":31, "status":0 },
	{ "id":32, "status":0 },
	{ "id":33, "status":0 },
	{ "id":34, "status":0 },
	{ "id":35, "status":0 },
	{ "id":36, "status":0 },
	{ "id":37, "status":0 }
]

	const thirdcells = [
	{ "id":0, "status":0 },
	{ "id":1, "status":0 },
	{ "id":2, "status":0 },
	{ "id":3, "status":0 },
	{ "id":4, "status":0 },
	{ "id":5, "status":0 },
	{ "id":6, "status":0 },
	{ "id":7, "status":0 },
	{ "id":8, "status":0 },
	{ "id":9, "status":0 },
	{ "id":10, "status":0 },
	{ "id":11, "status":0 }, 
	{ "id":12, "status":0 },
	{ "id":13, "status":0 },
	{ "id":14, "status":0 },
	{ "id":15, "status":0 },
	{ "id":16, "status":0 },
	{ "id":17, "status":0 },
	{ "id":18, "status":0 },
	{ "id":19, "status":0 },
	{ "id":20, "status":0 },
	{ "id":21, "status":0 },
	{ "id":22, "status":0 },
	{ "id":23, "status":0 },
	{ "id":24, "status":0 },
	{ "id":25, "status":0 },
	{ "id":26, "status":0 },
	{ "id":27, "status":0 },
	{ "id":28, "status":0 },
	{ "id":29, "status":0 },
	{ "id":30, "status":0 },
	{ "id":31, "status":0 },
	{ "id":32, "status":0 },
	{ "id":33, "status":0 },
	{ "id":34, "status":0 },
	{ "id":35, "status":0 },
	{ "id":36, "status":0 },
	{ "id":37, "status":0 }
]
;

function twocells_reset() {
	twocells[0].status = 0;
	twocells[1].status = 0;
	twocells[2].status = 0;
	twocells[3].status = 0;
	twocells[4].status = 0;
	twocells[5].status = 0;
	twocells[6].status = 0;
	twocells[7].status = 0;
	twocells[8].status = 0;
	twocells[9].status = 0;
	twocells[10].status = 0;
	twocells[11].status = 0;
	twocells[12].status = 0;
	twocells[13].status = 0;
	twocells[14].status = 0;
	twocells[15].status = 0;
	twocells[16].status = 0;
	twocells[17].status = 0;
	twocells[18].status = 0;
	twocells[19].status = 0;
	twocells[20].status = 0;
	twocells[21].status = 0;
	twocells[22].status = 0;
	twocells[23].status = 0;
	twocells[24].status = 0;
	twocells[25].status = 0;
	twocells[26].status = 0;
	twocells[27].status = 0;
	twocells[28].status = 0;
	twocells[29].status = 0;
	twocells[30].status = 0;
	twocells[31].status = 0;
	twocells[32].status = 0;
	twocells[33].status = 0;
	twocells[34].status = 0;
	twocells[35].status = 0;
	twocells[36].status = 0;
	twocells[37].status = 0;
}

function score_list(b,c) {
	let boxX = document.querySelector('#scoreX_list');
	let box0 = document.querySelector('#score0_list');
	let li_elem = document.createElement('li');
	li_elem.innerHTML = c;
	if (b === 1) {
		boxX.append(li_elem);
	} else {
		box0.append(li_elem);
	}
}


function rounds_select(a) {
	localStorage.setItem('round_max', a) // max rounds
}

let input_rounds = document.querySelector('#rounds');
input_rounds.oninput = function() {
	rounds_select(input_rounds.value);
}




window.onload = function() {
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;		
	document.getElementById("b4").disabled = true;
	document.getElementById("b5").disabled = true;
	document.getElementById("b6").disabled = true;
	document.getElementById("b7").disabled = true;
	document.getElementById("b8").disabled = true;
	document.getElementById("b9").disabled = true;
	document.getElementById("b10").disabled = true;
	document.getElementById("b11").disabled = true;
	document.getElementById("b12").disabled = true;
	document.getElementById("b13").disabled = true;		
	document.getElementById("b14").disabled = true;
	document.getElementById("b15").disabled = true;
	document.getElementById("b16").disabled = true;
	localStorage.setItem('Auto_Round', false);
	localStorage.setItem('my_turn', false);
	
}


function Start() {
	// Score tables
	localStorage.setItem('scoreX', 0);
	localStorage.setItem('score0', 0);
	localStorage.setItem('round_score', 1);
	document.getElementById("btn1").disabled = false; // btn1 - button reset
	document.getElementById("btn2").disabled = true;  // btn2 - button next round
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;		
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
	document.getElementById("b10").disabled = false;
	document.getElementById("b11").disabled = false;
	document.getElementById("b12").disabled = false;
	document.getElementById("b13").disabled = false;		
	document.getElementById("b14").disabled = false;
	document.getElementById("b15").disabled = false;
	document.getElementById("b16").disabled = false;
		// Here, Printing Result
		if (flag == "X") {
			
			document.getElementById('print')
				.innerHTML = flags();
		}
		else {
			document.getElementById('print')
				.innerHTML = flags();
		}
}


// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var b1, b1, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	b10 = document.getElementById("b10").value;
	b11 = document.getElementById("b11").value;
	b12 = document.getElementById("b12").value;
	b13 = document.getElementById("b13").value;
	b14 = document.getElementById("b14").value;
	b15 = document.getElementById("b15").value;
	b16 = document.getElementById("b16").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	// First type of combination and won combination
	if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X') && (b16 == 'x' ||
		b16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").style.boxShadow = '0px 0px 15px 0px var(--red)';
		Auto_Round();
	}
	else if ((b10 == 'x' || b10 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b6 == 'x' || b6 == 'X') && (b13 == 'x' ||
		b13 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X') && (b10 == 'x' ||
		b10 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X') && (b11 == 'x' ||
		b11 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X') && (b12 == 'x' ||
		b12 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b13 == 'x' || b13 == 'X') && (b14 == 'x' ||
		b14 == 'X') && (b15 == 'x' || b15 == 'X') && (b16 == 'x' ||
		b16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b14").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b15").style.boxShadow = '0px 0px 15px 0px var(--red)';
	    document.getElementById("b16").style.boxShadow = '0px 0px 15px 0px var(--red)';
		Auto_Round();
	}
	else if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X') && (b13 == 'x' ||
		b13 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b2").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b3").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X') && (b14 == 'x' ||
		b14 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b5").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b6").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}	
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X') && (b15 == 'x' ||
		b15 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b8").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b9").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").style.boxShadow = '0px 0px 15px 0px var(--red)';
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b10 == 'x' || b10 == 'X') && (b11 == 'x' ||
		b11 == 'X') && (b12 == 'x' || b12 == 'X') && (b16 == 'x' ||
		b16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("btn2").disabled = false;
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +4;
		score_list(1,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b11").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b12").style.boxShadow = '0px 0px 15px 0px var(--red)';
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").style.boxShadow = '0px 0px 15px 0px var(--red)';
		Auto_Round();
	}

	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0') && (b16 == '0' ||
		b16 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").style.boxShadow = '0px 0px 15px 0px var(--green)';
		Auto_Round();
	}
	else if ((b10 == '0' || b10 == '0') && (b8 == '0' ||
		b8 == '0') && (b6 == '0' || b6 == '0') && (b13 == '0' ||
		b13 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0') && (b10 == '0' ||
		b10 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0') && (b11 == '0' ||
		b11 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0') && (b12 == '0' ||
		b12 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b13 == '0' || b13 == '0') && (b14 == '0' ||
		b14 == '0') && (b15 == '0' || b15 == '0') && (b16 == '0' ||
		b16 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b14").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b15").style.boxShadow = '0px 0px 15px 0px var(--green)';
	    document.getElementById("b16").style.boxShadow = '0px 0px 15px 0px var(--green)';
		Auto_Round();
	}
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0') && (b13 == '0' ||
		b13 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b2").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b3").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0') && (b14 == '0' ||
		b14 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b5").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b6").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}	
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0') && (b15 == '0' ||
		b15 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b8").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b9").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b10").disabled = true;
		document.getElementById("b11").disabled = true;
		document.getElementById("b12").disabled = true;
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").style.boxShadow = '0px 0px 15px 0px var(--green)';
	    document.getElementById("b16").disabled = true;
		Auto_Round();
	}
	else if ((b10 == '0' || b10 == '0') && (b11 == '0' ||
		b11 == '0') && (b12 == '0' || b12 == '0') && (b16 == '0' ||
		b16 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("btn2").disabled = false;
		localStorage.score0 = parseInt(localStorage.score0 || 0) +4;
		score_list(0,'+4');
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b11").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b12").style.boxShadow = '0px 0px 15px 0px var(--green)';
		document.getElementById("b13").disabled = true;
		document.getElementById("b14").disabled = true;
		document.getElementById("b15").disabled = true;
	    document.getElementById("b16").style.boxShadow = '0px 0px 15px 0px var(--green)';
		Auto_Round();
	}

	// Second type of combination [ X ]
	 if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (twocells[0].status != 1)) { 
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[0].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X') && (twocells[1].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[1].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (twocells[2].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[2].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X') && (twocells[3].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[3].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (twocells[4].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[4].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X') && (twocells[5].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[5].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (twocells[6].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[6].status = 1;
		document.getElementById('print').innerHTML = flags();
	}		
	 if ((b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X') && (twocells[7].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[7].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (twocells[8].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[8].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X') && (twocells[9].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[9].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (twocells[10].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[10].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X') && (twocells[11].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[11].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (twocells[12].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[12].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X') && (twocells[13].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[13].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b4 == 'x' || b4 == 'X') && (b8 == 'x' || b8 == 'X') && (twocells[14].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[14].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == 'x' || b2 == 'X') && (b6 == 'x' || b6 == 'X') && (twocells[15].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[15].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (twocells[16].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[16].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X') && (twocells[17].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[17].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == 'x' || b2 == 'X') && (b4 == 'x' || b4 == 'X') && (twocells[18].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[18].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b6 == 'x' || b6 == 'X') && (b8 == 'x' || b8 == 'X') && (twocells[19].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[19].status = 1;
		document.getElementById('print').innerHTML = flags();
	}

	 if ((b7 == 'x' || b7 == 'X') && (b10 == 'x' || b10 == 'X') && (twocells[20].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[20].status = 1;
		document.getElementById('print').innerHTML = flags();
	}	

	 if ((b8 == 'x' || b8 == 'X') && (b11 == 'x' || b11 == 'X') && (twocells[21].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[21].status = 1;
		document.getElementById('print').innerHTML = flags();
	}

	 if ((b9 == 'x' || b9 == 'X') && (b12 == 'x' || b12 == 'X') && (twocells[22].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[22].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b15 == 'x' || b15 == 'X') && (b16 == 'x' || b16 == 'X') && (twocells[23].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[23].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b14 == 'x' || b14 == 'X') && (b15 == 'x' || b15 == 'X') && (twocells[24].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[24].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b13 == 'x' || b13 == 'X') && (b14 == 'x' || b14 == 'X') && (twocells[25].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[25].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b3 == 'x' || b3 == 'X') && (b13 == 'x' || b13 == 'X') && (twocells[26].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[26].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b6 == 'x' || b6 == 'X') && (b14 == 'x' || b14 == 'X') && (twocells[27].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[27].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b9 == 'x' || b9 == 'X') && (b15 == 'x' || b15 == 'X') && (twocells[28].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[28].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b12 == 'x' || b12 == 'X') && (b16 == 'x' || b16 == 'X') && (twocells[29].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[29].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b3 == 'x' || b3 == 'X') && (b14 == 'x' || b14 == 'X') && (twocells[30].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[30].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b6 == 'x' || b6 == 'X') && (b15 == 'x' || b15 == 'X') && (twocells[31].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[31].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b9 == 'x' || b9 == 'X') && (b16 == 'x' || b16 == 'X') && (twocells[32].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[32].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b12 == 'x' || b12 == 'X') && (b15 == 'x' || b15 == 'X') && (twocells[33].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[33].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b9 == 'x' || b9 == 'X') && (b14 == 'x' || b14 == 'X') && (twocells[34].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[34].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b6 == 'x' || b6 == 'X') && (b13 == 'x' || b13 == 'X') && (twocells[35].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[35].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b7 == 'x' || b7 == 'X') && (b11 == 'x' || b11 == 'X') && (twocells[36].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[36].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b8 == 'x' || b8 == 'X') && (b10 == 'x' || b10 == 'X') && (twocells[37].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +2;
		score_list(1,'+2');
		twocells[37].status = 1;
		document.getElementById('print').innerHTML = flags();
	}

	// Second type of combination [ 0 ]

	 if ((b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (twocells[0].status != 1)) { 
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[0].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0') && (twocells[1].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[1].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (twocells[2].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[2].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0') && (twocells[3].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[3].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (twocells[4].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[4].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0') && (twocells[5].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[5].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (twocells[6].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[6].status = 1;
		document.getElementById('print').innerHTML = flags();
	}		
	 if ((b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0') && (twocells[7].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[7].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (twocells[8].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[8].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0') && (twocells[9].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[9].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (twocells[10].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[10].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0') && (twocells[11].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[11].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (twocells[12].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[12].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0') && (twocells[13].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[13].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b4 == '0' || b4 == '0') && (b8 == '0' || b8 == '0') && (twocells[14].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[14].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == '0' || b2 == '0') && (b6 == '0' || b6 == '0') && (twocells[15].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[15].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (twocells[16].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[16].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0') && (twocells[17].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[17].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b2 == '0' || b2 == '0') && (b4 == '0' || b4 == '0') && (twocells[18].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[18].status = 1;
		document.getElementById('print').innerHTML = flags();
	}
	 if ((b6 == '0' || b6 == '0') && (b8 == '0' || b8 == '0') && (twocells[19].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[19].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b7 == '0' || b7 == '0') && (b10 == '0' || b10 == '0') && (twocells[20].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[20].status = 1;
		document.getElementById('print').innerHTML = flags();
	}	

	 if ((b8 == '0' || b8 == '0') && (b11 == '0' || b11 == '0') && (twocells[21].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[21].status = 1;
		document.getElementById('print').innerHTML = flags();
	}

	 if ((b9 == '0' || b9 == '0') && (b12 == '0' || b12 == '0') && (twocells[22].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[22].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b15 == '0' || b15 == '0') && (b16 == '0' || b16 == '0') && (twocells[23].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[23].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b14 == '0' || b14 == '0') && (b15 == '0' || b15 == '0') && (twocells[24].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[24].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b13 == '0' || b13 == '0') && (b14 == '0' || b14 == '0') && (twocells[25].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[25].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b3 == '0' || b3 == '0') && (b13 == '0' || b13 == '0') && (twocells[26].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[26].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b6 == '0' || b6 == '0') && (b14 == '0' || b14 == '0') && (twocells[27].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[27].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b9 == '0' || b9 == '0') && (b15 == '0' || b15 == '0') && (twocells[28].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[28].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b12 == '0' || b12 == '0') && (b16 == '0' || b16 == '0') && (twocells[29].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[29].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b3 == '0' || b3 == '0') && (b14 == '0' || b14 == '0') && (twocells[30].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[30].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b6 == '0' || b6 == '0') && (b15 == '0' || b15 == '0') && (twocells[31].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[31].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b9 == '0' || b9 == '0') && (b16 == '0' || b16 == '0') && (twocells[32].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[32].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b12 == '0' || b12 == '0') && (b15 == '0' || b15 == '0') && (twocells[33].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[33].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b9 == '0' || b9 == '0') && (b14 == '0' || b14 == '0') && (twocells[34].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[34].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b6 == '0' || b6 == '0') && (b13 == '0' || b13 == '0') && (twocells[35].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[35].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b7 == '0' || b7 == '0') && (b11 == '0' || b11 == '0') && (twocells[36].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[36].status = 1;
		document.getElementById('print').innerHTML = flags();
	}


	 if ((b8 == '0' || b8 == '0') && (b10 == '0' || b10 == '0') && (twocells[37].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +2;
		score_list(0,'+2');
		twocells[37].status = 1;
		document.getElementById('print').innerHTML = flags();
	}

	// Third type of combination [ X ] thirdcells

	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X') && (thirdcells[0].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[0].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}
	if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X') && (thirdcells[1].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[1].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X') && (thirdcells[2].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[2].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X') && (thirdcells[3].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[3].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X') && (thirdcells[4].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[4].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X') && (thirdcells[5].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[5].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X') && (thirdcells[6].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[6].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X') && (thirdcells[7].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[7].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}	

	if ((b4 == 'x' || b4 == 'X') && (b7 == 'x' ||
		b7 == 'X') && (b10 == 'x' || b10 == 'X') && (thirdcells[8].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[8].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b5 == 'x' || b5 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b11 == 'x' || b11 == 'X') && (thirdcells[9].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[9].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b6 == 'x' || b6 == 'X') && (b9 == 'x' ||
		b9 == 'X') && (b12 == 'x' || b12 == 'X') && (thirdcells[10].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[10].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b13 == 'x' || b13 == 'X') && (b14 == 'x' ||
		b14 == 'X') && (b15 == 'x' || b15 == 'X') && (thirdcells[11].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[11].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b14 == 'x' || b14 == 'X') && (b15 == 'x' ||
		b15 == 'X') && (b16 == 'x' || b16 == 'X') && (thirdcells[12].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[12].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b10 == 'x' || b10 == 'X') && (b11 == 'x' ||
		b11 == 'X') && (b12 == 'x' || b12 == 'X') && (thirdcells[13].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[13].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b11 == 'x' || b11 == 'X') && (b12 == 'x' ||
		b12 == 'X') && (b16 == 'x' || b16 == 'X') && (thirdcells[14].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[14].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b8 == 'x' || b8 == 'X') && (b9 == 'x' ||
		b9 == 'X') && (b15 == 'x' || b15 == 'X') && (thirdcells[15].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[15].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b5 == 'x' || b5 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b14 == 'x' || b14 == 'X') && (thirdcells[16].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[16].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b2 == 'x' || b2 == 'X') && (b3 == 'x' ||
		b3 == 'X') && (b13 == 'x' || b13 == 'X') && (thirdcells[17].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[17].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b10 == 'x' || b10 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b6 == 'x' || b6 == 'X') && (thirdcells[18].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[18].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b11 == 'x' || b11 == 'X') && (b9 == 'x' ||
		b9 == 'X') && (b14 == 'x' || b14 == 'X') && (thirdcells[19].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[19].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b5 == 'x' || b5 == 'X') && (b9 == 'x' ||
		b9 == 'X') && (b16 == 'x' || b16 == 'X') && (thirdcells[20].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[20].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b4 == 'x' || b4 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b12 == 'x' || b12 == 'X') && (thirdcells[21].status != 1)) {
		localStorage.scoreX = parseInt(localStorage.scoreX || 0) +3;
		score_list(1,'+3');
		thirdcells[21].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	// Third type of combination [ 0 ] thirdcells

	if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0') && (thirdcells[0].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[0].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}
	if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0') && (thirdcells[1].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[1].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0') && (thirdcells[2].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[2].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0') && (thirdcells[3].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[3].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0') && (thirdcells[4].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[4].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0') && (thirdcells[5].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[5].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0') && (thirdcells[6].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[6].status = 1;
		document.getElementById('print').innerHTML = flags();			
	}
	if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0') && (thirdcells[7].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[7].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}	

	if ((b4 == '0' || b4 == '0') && (b7 == '0' ||
		b7 == '0') && (b10 == '0' || b10 == '0') && (thirdcells[8].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[8].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b5 == '0' || b5 == '0') && (b8 == '0' ||
		b8 == '0') && (b11 == '0' || b11 == '0') && (thirdcells[9].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[9].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b6 == '0' || b6 == '0') && (b9 == '0' ||
		b9 == '0') && (b12 == '0' || b12 == '0') && (thirdcells[10].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[10].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b13 == '0' || b13 == '0') && (b14 == '0' ||
		b14 == '0') && (b15 == '0' || b15 == '0') && (thirdcells[11].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[11].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b14 == '0' || b14 == '0') && (b15 == '0' ||
		b15 == '0') && (b16 == '0' || b16 == '0') && (thirdcells[12].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[12].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b10 == '0' || b10 == '0') && (b11 == '0' ||
		b11 == '0') && (b12 == '0' || b12 == '0') && (thirdcells[13].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[13].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b11 == '0' || b11 == '0') && (b12 == '0' ||
		b12 == '0') && (b16 == '0' || b16 == '0') && (thirdcells[14].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[14].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b8 == '0' || b8 == '0') && (b9 == '0' ||
		b9 == '0') && (b15 == '0' || b15 == '0') && (thirdcells[15].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[15].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b5 == '0' || b5 == '0') && (b6 == '0' ||
		b6 == '0') && (b14 == '0' || b14 == '0') && (thirdcells[16].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[16].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b2 == '0' || b2 == '0') && (b3 == '0' ||
		b3 == '0') && (b13 == '0' || b13 == '0') && (thirdcells[17].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[17].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b10 == '0' || b10 == '0') && (b8 == '0' ||
		b8 == '0') && (b6 == '0' || b6 == '0') && (thirdcells[18].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[18].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b11 == '0' || b11 == '0') && (b9 == '0' ||
		b9 == '0') && (b14 == '0' || b14 == '0') && (thirdcells[19].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[19].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b5 == '0' || b5 == '0') && (b9 == '0' ||
		b9 == '0') && (b16 == '0' || b16 == '0') && (thirdcells[20].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[20].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}

	if ((b4 == '0' || b4 == '0') && (b8 == '0' ||
		b8 == '0') && (b12 == '0' || b12 == '0') && (thirdcells[21].status != 1)) {
		localStorage.score0 = parseInt(localStorage.score0 || 0) +3;
		score_list(0,'+3');
		thirdcells[21].status = 1;
		document.getElementById('print').innerHTML = flags();		
	}
	
	// Checking of Player 0 finsh
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0') && (b10 == 'X'
		|| b10 == '0') && (b11 == 'X' || b11 == '0') &&
		(b12 == 'X' || b12 == '0') && (b13 == 'X' ||
		b13 == '0') && (b14 == 'X' || b14 == '0') &&
		(b15 == 'X' || b15 == '0') && (b16 == 'X' ||
		b16 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
				document.getElementById("btn2").disabled = false;
				localStorage.scoreX = parseInt(localStorage.scoreX || 0) - 5;
				localStorage.score0 = parseInt(localStorage.score0 || 0) - 5;
				score_list(1,'-5');
				score_list(0,'-5');
				Auto_Round();
}
	else {

		// Here, Printing Result
		if (flag == "X") {			
			document.getElementById('print').innerHTML = flags();
			document.getElementById('print').style.color = 'var(--red)';
		}
		else {
			document.getElementById('print').innerHTML = flags();
			document.getElementById('print').style.color = 'var(--green)';

		}
	}
}

// Function to reset game
function Reset() {
	location.reload();
	twocells_reset();
	delete localStorage.scoreX;
	delete localStorage.score0;
	delete localStorage.round_score;
	delete localStorage.btn_start;
	delete localStorage.round_max;
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
	document.getElementById("b10").value = '';
	document.getElementById("b11").value = '';
	document.getElementById("b12").value = '';
	document.getElementById("b13").value = '';		
	document.getElementById("b14").value = '';
	document.getElementById("b15").value = '';
	document.getElementById("b16").value = '';

}



// Next Round and give point to score

function Next_Round() {	
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
	document.getElementById("b10").value = '';
	document.getElementById("b11").value = '';
	document.getElementById("b12").value = '';
	document.getElementById("b13").value = '';		
	document.getElementById("b14").value = '';
	document.getElementById("b15").value = '';
	document.getElementById("b16").value = '';

	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;		
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
	document.getElementById("b10").disabled = false;
	document.getElementById("b11").disabled = false;
	document.getElementById("b12").disabled = false;
	document.getElementById("b13").disabled = false;		
	document.getElementById("b14").disabled = false;
	document.getElementById("b15").disabled = false;
	document.getElementById("b16").disabled = false;

	document.getElementById('b1').style = '';
	document.getElementById("b2").style = '';
	document.getElementById("b3").style = '';
	document.getElementById("b4").style = '';
	document.getElementById("b5").style = '';
	document.getElementById("b6").style = '';
	document.getElementById("b7").style = '';
	document.getElementById("b8").style = '';
	document.getElementById("b9").style = '';
	document.getElementById("b10").style = '';
	document.getElementById("b11").style = '';
	document.getElementById("b12").style = '';
	document.getElementById("b13").style = '';		
	document.getElementById("b14").style = '';
	document.getElementById("b15").style = '';
	document.getElementById("b16").style = '';
	
	document.getElementById("btn2").disabled = true;
	twocells_reset();
	document.querySelector('#scoreX_list').innerHTML = '';
	document.querySelector('#score0_list').innerHTML = '';
	function clearlist() {
	document.querySelector('#scoreX_list').innerHTML = '';
	document.querySelector('#score0_list').innerHTML = '';
	}
	setTimeout(clearlist,0001);
	localStorage.round_score = parseInt(localStorage.round_score || 0) + 1;
	document.getElementById('round_score').innerHTML = 'Round ' + localStorage.round_score;
	document.getElementById('scoreX').innerHTML = localStorage.scoreX;
	document.getElementById('score0').innerHTML = localStorage.score0;
	if (localStorage.my_turn == 'true') {

	} else {
		flag = "X";
	}
	
		// Here, Printing Result
		if (flag == "X") {			
			document.getElementById('print').innerHTML = flags();
			document.getElementById('print').style.color = 'var(--red)';
		}
		else {
			document.getElementById('print').innerHTML = flags();
			document.getElementById('print').style.color = 'var(--green)';

		}
	if (Number(localStorage.round_score) > Number(localStorage.round_max)) {
		Final();
}


	
}

function Final() { 
	const scoreXn = localStorage.getItem('scoreX');
	const score0n = localStorage.getItem('score0');
	const Player_One = localStorage.key('scoreX');
	const Player_Two = localStorage.key('score0');
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;		
	document.getElementById("b4").disabled = true;
	document.getElementById("b5").disabled = true;
	document.getElementById("b6").disabled = true;
	document.getElementById("b7").disabled = true;
	document.getElementById("b8").disabled = true;
	document.getElementById("b9").disabled = true;
	document.getElementById("b10").disabled = true;
	document.getElementById("b11").disabled = true;
	document.getElementById("b12").disabled = true;
	document.getElementById("b13").disabled = true;		
	document.getElementById("b14").disabled = true;
	document.getElementById("b15").disabled = true;
	document.getElementById("b16").disabled = true;
	const numbers = {
	  Player_One: scoreXn,
	  Player_Two: score0n
	}
 	if (scoreXn === score0n) {
 		document.getElementById('round_score').innerHTML = '0:0 😐'
 	} else {
	document.getElementById('round_score').innerHTML = 'Winner' + ' ' + Object.entries(numbers).reduce((a, b) => a[1] > b[1] ? a : b);
	}
}

function CheckScore() {
	document.getElementById('round_score').innerHTML = localStorage.round_score;
	document.getElementById('scoreX').innerHTML = localStorage.scoreX;
	document.getElementById('score0').innerHTML = localStorage.score0;
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0

function CheckTurn(id){
if (flag == "X") {
document.getElementById(id).value = "X";
document.getElementById(id).style.borderColor = 'var(--red)';
document.getElementById(id).style.color = 'var(--red)';
document.getElementById(id).disabled = true;
flag = "0";
}
else {
document.getElementById(id).value = "0";
document.getElementById(id).style.borderColor = 'var(--green)';
document.getElementById(id).style.color = 'var(--green)';
document.getElementById(id).disabled = true;
flag = "X";
}
}
