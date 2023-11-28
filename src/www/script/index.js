const text = document.getElementById('text');
const cislo = document.getElementById('cislo');
const tlacitka = document.getElementById('tlacitka');
		
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
