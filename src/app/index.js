const express = require('express');
const jsondb = require('simple-json-db');

const app = express();
const db = new jsondb('./data/adresy.json');

// middle-ware pro prijem dat v JSONu
app.use(express.json());

app.use(express.static('./www'));

// koncovy bod pro dotaz z klienta
app.post('/prihlasit', (req, res) => {
	const adresa = req.body.adresa;
	
	if(db.has(adresa) && db.get(adresa).subscribed == true) {
		res.json({uspech: false});
	} else {
		db.set(adresa, {subscribed: true});
		
		res.json({uspech: true});
	}
});

app.post('/odhlasit', (req, res) => {
	const adresa = req.body.adresa;
	
	if(db.has(adresa)) {
		db.set(adresa, {subscribed: false});
		
		res.json({uspech: true});
	} else {
		res.json({uspech: false});
	}
});

module.exports = app;
