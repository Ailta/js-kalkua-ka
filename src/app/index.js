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
	
	if(db.has(adresa)) {
		res.json({uspech: false});
	} else {
		db.set(adresa, {subscribed: true});
		
		res.json({uspech: true});
	}
});

module.exports = app;
