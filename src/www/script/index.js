const text = document.getElementById('text');
const cislo = document.getElementById('cislo');
const tlacitka = document.getElementById('tlacitka');

let endNum = 0;
let numbers = [];
let actions = [];
let clearDisplayOnNextAction = true;
	
console.log("hello world!");
	
function fantomas() {
	text.innerHTML = 'Byl jsem tu, Fantomas!';
}

function barva() {
	text.style.color = 'red';
}

function plus() {
	cislo.value -= -1;
}

function minus() {
	cislo.value -= 1;
}

function tlacitko() {
	tlacitka.innerHTML += '<button onclick="tlacitko()">Víííc tlačítek...</button>';
}

const calcDisplay = document.getElementById('display');

function addNum(butt) {
	if (clearDisplayOnNextAction) {
		calcDisplay.value = "";
		clearDisplayOnNextAction = false;
	}
	
	const num = butt.innerHTML;
	
	calcDisplay.value += num;
}

function addSymbol() {
	if (endNum == 0)
		endNum = calcDisplay.value;
	else
		numbers.push(calcDisplay.value);
	actions.push("add");
	clearDisplayOnNextAction = true;
	
	console.log(numbers);
	console.log(actions);
	
	calcDisplay.value = 0;
}

function operations(action, number) {
	if (action == "add") {
		endNum -= -number;
	}
}

function equalsSymbol() {
	for (let i = 0; i <= numbers.length; i++) {
		if (i == numbers.length)
			operations("add", calcDisplay.value);
		else
			operations(actions[i], numbers[i]);
			
	}
	
	numbers = [];
	actions = [];
	clearDisplayOnNextAction = true;
	
	console.log(endNum);
	calcDisplay.value = endNum;
}