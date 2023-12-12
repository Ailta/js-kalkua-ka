const email = document.getElementById('email');
const vysledek = document.getElementById('vysledek');
		
function prihlasit() {
	const adresa = email.value.trim();

	if(!adresa) {
		return;
	}

	fetch('/prihlasit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ adresa })
	})
	.then(odpoved => odpoved.json())
	.then(data => {
		if(data.uspech) {
			vysledek.innerHTML = 'Přihlášení proběhlo úspěšně.';
			vysledek.style.color = 'green';
			email.value = '';
		} else {
			vysledek.innerHTML = 'Přihlášení se nezdařilo.';
			vysledek.style.color = 'red';
		}
	});
}

function odhlasit() {
	const adresa = email.value.trim();

	if(!adresa) {
		return;
	}

	fetch('/odhlasit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ adresa })
	})
	.then(odpoved => odpoved.json())
	.then(data => {
		if(data.uspech) {
			vysledek.innerHTML = 'Odhlášení proběhlo úspěšně.';
			vysledek.style.color = 'green';
			email.value = '';
		} else {
			vysledek.innerHTML = 'Odhlášení se nezdařilo.';
			vysledek.style.color = 'red';
		}
	});
}
