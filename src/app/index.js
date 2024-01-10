const express = require('express');
const jsondb = require('simple-json-db');

const app = express();
const db = new jsondb('../data/stats.json');

db.set(0, {clicked: 0});
db.set(1, {clicked: 0});
db.set(2, {clicked: 0});
db.set(3, {clicked: 0});
db.set(4, {clicked: 0});
db.set(5, {clicked: 0});
db.set(6, {clicked: 0});
db.set(7, {clicked: 0});
db.set(8, {clicked: 0});
db.set(9, {clicked: 0});

// middle-ware pro prijem dat v JSONu
app.use(express.json());

app.use(express.static('./www'));

// koncovy bod pro dotaz z klienta
app.post('/addNumStat', (req, res) => {
	const num = req.body.num;
	
	clickedDB = db.get(num).clicked;
	clickedDB++;
	
	db.set(num, {clicked: clickedDB});
	res.json(db.JSON());
});

module.exports = app;
