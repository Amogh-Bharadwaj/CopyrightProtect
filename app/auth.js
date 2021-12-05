var express = require('express')
var cors = require('cors')
var app = express()
var CryptoJS = require("crypto-js");
var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('production.db');
var Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:7545');

 app.use(cors())
app.use(express.json())
app.listen(5000, () => console.log(`Listening on port 5000`)); 

async function new_account(){
	new_account = await web3.eth.personal.newAccount('helpme');
        web3.eth.getBalance(new_account).then(console.log);
        web3.eth.personal.unlockAccount(new_account, 'helpme', 100000000).then(console.log);
		console.log("new account ka address hopefully: ",new_account);
		return new_account;
}

 
app.post('/auth', (req, res) => { 
  let account_id;

  const username = req.body.name;
  console.log("username:", username);
  const password = CryptoJS.SHA256(req.body.password);
  
  new_account().then((addr)=>{
    console.log(addr);
    account_id=addr;

  
  
    db.run('INSERT INTO USERS(ACCOUNT_ID, USERNAME, PASSWORD) VALUES(?, ?, ?)', [account_id, username, password], (err) => {
      if(err) {
          return console.log(err.message); 
      }
      console.log('Row was added to the table: ${this.lastID}');
      })
    })  
 
}); 
