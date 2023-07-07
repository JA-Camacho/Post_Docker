var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.17.0.2",
  user: "root",
  password: "root123",
  database: "ContentHub"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  }); 

  module.exports = con;