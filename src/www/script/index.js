const text = document.getElementById('text');
const cislo = document.getElementById('cislo');
const tlacitka = document.getElementById('tlacitka');

let endNum = 0;
let numbers = [];
let actions = [];
let clearDisplayOnNextAction = true;
let hasComma = false;
let clearLastCharOnNextAction = false;
	
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
	console.log(clearLastCharOnNextAction);
	if (clearDisplayOnNextAction) {
		calcDisplay.value = "";
		clearDisplayOnNextAction = false;
	}
	
	console.log("1");

	if (clearLastCharOnNextAction == true){
		let number = calcDisplay.value;
		number = number.slice(0, -1);
		console.log("2");
		calcDisplay.value = number + butt.innerHTML;
		clearLastCharOnNextAction = false;
	}
	else {
		const num = butt.innerHTML;
		console.log("3");
		calcDisplay.value += num;
	}
	console.log("4");

	console.log(clearLastCharOnNextAction);
	
}

function writeMathOperetion(operation) {
	if (endNum == 0)
		endNum = calcDisplay.value;
	else
		numbers.push(calcDisplay.value);

	actions.push(operation);
	clearDisplayOnNextAction = true;
	clearLastCharOnNextAction = false;
	hasComma = false;

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
	clearLastCharOnNextAction = false;
	hasComma = false;
	
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
	clearLastCharOnNextAction = false;
	hasComma = false;
}

function clearDisplayButton() {
	calcDisplay.value = 0;
	clearDisplayOnNextAction = true;	
	clearLastCharOnNextAction = false;
	hasComma = false;
}

function comma() {
	console.log(clearLastCharOnNextAction);
	if (!hasComma) {
		let com = '.0';
		let number = calcDisplay.value;
		calcDisplay.value = number.concat(com);
		hasComma = true;
		clearLastCharOnNextAction = true;
	}
	console.log(clearLastCharOnNextAction);
}

function negate() {
	calcDisplay.value = -calcDisplay.value;
}