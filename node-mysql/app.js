const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

// Create connection to server
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node-login',
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('MySQL connection established');
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

app.listen(port, (req, res) => {
  console.log(`This app is running on http://localhost:${port}`);
});
