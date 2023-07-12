var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.18.0.3",
  port: 3306,
  user: "jose",
  password: "jose123",
  database: "ContentHub"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected User!");
  }); 

  module.exports = con;