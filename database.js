var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.18.0.2",
  user: "jose",
  password: "jose123",
  database: "ContentHub"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  }); 

  module.exports = con;