const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
  
  const query = 'INSERT INTO projects (title, description, live_url, github_url) VALUES (?, ?, ?, ?)';
  const values = [
    'ACADEMIC ANALYZER',
    'A comprehensive dashboard for academic analysis.',
    'https://svheccgpa.onrender.com/',
    'https://github.com/sanjai090/ACADEMIC-DASHBOARD'
  ];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error inserting project:', err);
    } else {
      console.log('Successfully inserted project!', results);
    }
    db.end();
  });
});
