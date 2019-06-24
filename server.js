const googleSheets = require('gsa-sheets');
const express = require('express');
const bodyParser = require('body-parser');

const key = require('./privateSettings.json');
const SPREADSHEET_ID ='1KLUDq-FRhHNoDA9104bprKPgbYnqrpit6b4tA1MhwJI';

const sheet = googleSheets(key.client_email, key.private_key, SPREADSHEET_ID);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

async function onPost(req, res){
	const target = req.body;
	var ans=[target.stage , target.link];
	console.log(ans);
	sheet.appendRow(ans);
	res.json(ans);
}
app.post('/api', jsonParser, onPost);

async function onGet(req, res) {
    const result = await sheet.getRows();
	const rows = result.rows;
	console.log(rows);

    res.json(rows);
}
app.get('/api', onGet);


// Please don't change this; this is needed to deploy on Heroku.
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});