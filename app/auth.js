var express = require('express')
var cors = require('cors')
var app = express()
var CryptoJS = require("crypto-js");
var sqlite3 = require('sqlite3').verbose();

 
 

app.use(cors())
app.use(express.json())
app.listen(5000, () => console.log(`Listening on port 5000`)); 
 
app.post('/auth', (req, res) => { 
  const username = req.body.name;
  const password = CryptoJS.SHA256(req.body.password);
  //run().then(pass => res.send({ express: 'happys password: '+ password }));
  res.send({ express: 'happys password: '+ password });
  
}); 
