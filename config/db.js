
const mysql = require('mysql2');


//mysql connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CRPMSS'
});

db.connect(err => {
  if(err){
    console.log('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
})

module.exports = db;

