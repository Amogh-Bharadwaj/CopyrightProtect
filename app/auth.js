var express = require('express')
var cors = require('cors')
var app = express()
var CryptoJS = require("crypto-js");
var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('production.db');

 app.use(cors())
app.use(express.json())
app.listen(5000, () => console.log(`Listening on port 5000`)); 
 
app.post('/auth', (req, res) => { 
  const username = req.body.name;
  const password = CryptoJS.SHA256(req.body.password);

  db.run('INSERT INTO USERS(ACCOUNT_ID, USERNAME, PASSWORD) VALUES(?, ?, ?)', ["penis", username, password], (err) => {
	if(err) {
		return console.log(err.message); 
	}
	console.log('Row was added to the table: ${this.lastID}');
    })
}); 
