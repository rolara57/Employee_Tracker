const mysql = require(mysql);
const util = require("util");

const connection = mysql.createConnection({
   host: "localhost",
   port: 3000,
   user: "root",
   Password: "Lo098uhj!",
   database: "employees" ,  
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;







