var express = require('express')
var cors = require('cors')
var app = express()
var CryptoJS = require("crypto-js");
var sqlite3 = require('sqlite3').verbose();
 
let db = new sqlite3.Database('production.db');
var Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:7545');

var borrowerId;

 
 app.use(cors())
app.use(express.json())
app.listen(5000, () => console.log(`Listening on port 5000`)); 

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
async function new_account(password){
        console.log("fkjbdfsjhkbgesdrf")
        console.log(password)
	    newAccount = await web3.eth.personal.newAccount(password);
        web3.eth.getBalance(newAccount).then(console.log);
        web3.eth.personal.unlockAccount(newAccount, password, 100000000).then(console.log);
		console.log("new account ka address hopefully: ",newAccount);
		return newAccount;
}
 
 
app.post('/auth', (req, res) => { 
  let account_id;
 
  const username = req.body.name;
  console.log("username:", username);
  const password = CryptoJS.SHA256(req.body.password);
  
  new_account(req.body.password).then((addr)=>{
    console.log(addr);
    account_id=addr;
 
    db.run('INSERT INTO USERS(ACCOUNT_ID, USERNAME, PASSWORD) VALUES(?, ?, ?)', [account_id, username, password], (err) => {
      if(err) {
          return console.log(err.message); 
      }
      //console.log('Row was added to the table: ${this.lastID}');
      borrowerId = account_id;
      res.send({"ID":account_id});
      })
    })  
 
}); 
 
app.post('/login', (req, res) => { 
    let account_id;
  
    const username = req.body.name;
    console.log("username:", username);
    const password = CryptoJS.SHA256(req.body.password);
    
      let select_all = `SELECT * FROM USERS WHERE USERNAME= (?) AND PASSWORD = (?)`;
      
      db.get(select_all, [username, password], (err, row) => {
          if(err) {
              throw err;
          } 
        
        
       console.log(row);
       account_id = row.ACCOUNT_ID;
       console.log(account_id);
       borrowerId = account_id;
       res.send({"ID":account_id});
 
        
      });
      
   
  }); 

  app.post('/borrow', (req, res) => { 
      
    
    const assetID = req.body.assetId;
    const price = req.body.price;
    const timestamp = Math.floor(Date.now() / 1000);
    const quantum = req.body.quantum;
    const iters = req.body.iterations;
    let owner_id;
    
    let check_borrowed = `SELECT * FROM ASSET_REQUESTS WHERE ASSET_ID = (?)`
    let get_owner = `SELECT ACCOUNT_ID FROM USER_ASSET_MAP WHERE ASSET_ID = (?)`;    
    let insert_request = `INSERT INTO ASSET_REQUESTS VALUES(?, ?, ?, ?, ?, ?, ?)`;
    let can_proceed = true;
    let can_still_proceed = true;

    db.get(check_borrowed, [assetID], (err, row) => {
        if(err) {
            throw err;
        } 
      
        if(row) {
            res.send({"error": "[ ALREADY USED ]"});
            can_proceed = false;
        }
    });
    
    if(can_proceed) {
       
            db.get(get_owner, [assetID], (err, row) => {
                if(err) {
                    throw err;
                } 
                if(!row){
                    console.log("Im in the error place");
                    res.send({"error": "[ NO SUCH ASSET EXISTS ]"});
                    can_still_proceed = false;
                }
               else{
                console.log("kgkjbdfgbjkds");
                console.log("row.ACCOUNT_ID: ",row.ACCOUNT_ID);
                owner_id = row.ACCOUNT_ID;
               }
                console.log("owner id: ",owner_id);
                if(can_still_proceed) {
                
                    console.log("owner_id came");
                    db.run(insert_request, [assetID, owner_id, borrowerId, timestamp, quantum, price, iters], (err) => {
                        if(err) {
                            throw err;
                        }         
                    });
                }  
            });  
    } 
  }); 

  app.post('/create', (req, res) => { 
    const assetName = req.body.assName;
    const assetID = makeid(8);
    
    let create_asset = `INSERT INTO ASSETS VALUES(?, ?)`;
    let map_asset = `INSERT INTO USER_ASSET_MAP VALUES(?, ?)`;
      db.serialize(()=>{
        db.run(create_asset, [assetID, assetName], (err) => {
            if(err) {
                throw err;
            } 
          
         
        }).run(map_asset, [borrowerId, assetID], (err) => {
          if(err) {
              throw err;
          } 
        
       res.send({"Status":"Mapped asset."});
      });    

      })
        
  }); 

  app.get('/myassets', (req, res) => { 
    
    let myAssets = `SELECT * FROM USER_ASSET_MAP WHERE ACCOUNT_ID = (?)`
    
        db.all(myAssets, [borrowerId], (err,rows) => {
            if(err) {
                throw err;
            } 
            console.log("my assets: ",rows);
            res.send({"assets":rows});
          
         
        })
        
  });


app.get('/incoming',(req,res)=>{
      let incoming = `select assets.name, asset_requests.asset_id,asset_requests.borrow_account_id,asset_requests.time_quantum_seconds,asset_requests.price_per_quantum,asset_requests.quantum_count from asset_requests inner join assets on asset_requests.asset_id=assets.asset_id where asset_requests.owner_account_id = (?)`

      db.all(incoming,[borrowerId],(err,rows)=>{
          if(err){
              throw err;
          }
         console.log(rows); 
          if(rows===undefined){
              console.log("No incoming requests");
          }
          else{
              res.send({"incoming":rows});
          }
      });
  });

  app.get('/sent',(req,res)=>{
    let sent = `select assets.name, asset_requests.asset_id,asset_requests.owner_account_id,asset_requests.time_quantum_seconds,asset_requests.price_per_quantum,asset_requests.quantum_count from asset_requests inner join assets on asset_requests.asset_id=assets.asset_id where asset_requests.borrow_account_id = (?)`

    db.all(sent,[borrowerId],(err,rows)=>{
        if(err){
            throw err;
        }
       console.log(rows); 
        if(rows===undefined){
            console.log("No sent requests");
        }
        else{
            res.send({"sent":rows});
        }
    });
});
 
 app.post('/decline',(req,res)=>{
     requester_id = req.body.requester;
     aid = req.body.assid;
     let delete_request = `delete from asset_requests where borrow_account_id=(?) and asset_id=(?)`

     
    db.run(delete_request, [requester_id,aid], function(err) {
        if (err) {
         return console.error(err.message);
        }
        console.log(`Row(s) deleted ${this.changes}`);
        res.send({"Status":"Deleted successfully,"});
    });
  
 


 });