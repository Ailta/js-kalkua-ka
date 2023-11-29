const text = document.getElementById('text');
const cislo = document.getElementById('cislo');
const tlacitka = document.getElementById('tlacitka');

let endNum = 0;
let numbers = [];
let actions = [];
let clearDisplayOnNextAction = true;
let hasComma = false;
	
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

function writeMathOperetion(operation) {
	if (endNum == 0)
		endNum = calcDisplay.value;
	else
		numbers.push(calcDisplay.value);

	actions.push(operation);
	clearDisplayOnNextAction = true;
	
	console.log(numbers);
	console.log(actions);
	
	calcDisplay.value = 0;
}

function operations(action, number) {
	if (action == "add") {
		endNum -= -number;
	}

	if (action == "subtract") {
		endNum -= number;
	}

	if (action == "multiplication") {
		endNum *= number;
	}

	if (action == "division") {
		endNum /= number;
	}
}

function equalsSymbol() {
	for (let i = 0; i <= numbers.length; i++) {
		if (i == numbers.length)
			operations(actions[i], calcDisplay.value);
		else
			operations(actions[i], numbers[i]);
			
	}
	
	numbers = [];
	actions = [];
	clearDisplayOnNextAction = true;
	
	console.log(endNum);
	calcDisplay.value = endNum;

	endNum = 0;
}

function clearButton() {
	numbers = [];
	actions = [];
	calcDisplay.value = 0;
	endNum = 0;
	clearDisplayOnNextAction = true;
}

function clearDisplayButton() {
	calcDisplay.value = 0;
	clearDisplayOnNextAction = true;	
}

function comma() {
	if (!hasComma) {
		calcDisplay.value = calcDisplay.value + ".";
		hasComma = true;
	}
}