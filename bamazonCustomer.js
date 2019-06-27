var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 5050,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(`Connected to: ${connection.database}`);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}
