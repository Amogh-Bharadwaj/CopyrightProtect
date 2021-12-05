

export const NewAccount=async(password)=>{

 var Web3 = require('web3');
 var web3 = new Web3('http://127.0.0.1:7545');

	    
        new_account = await web3.eth.personal.newAccount(password);
        web3.eth.getBalance(new_account).then(console.log);
        web3.eth.personal.unlockAccount(new_account, password, 100000000).then(console.log);
        return new_account;
}

export const CreateUser= async(n,p)=>{
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('production.db');

    let user_id;
    NewAccount(pass).then((address)=>{user_id=address;})

    db.run(`INSERT INTO USERS VALUES(?, ?, ?)`, [user_id,n,p], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
  
    // close the database connection
    db.close();


  }

