const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react_sql',
  port: 3306,
});

const app = express();

app.use(express.json());
app.use(cors());

// Test API to verify MySQL connection
app.get('/api/test', (req, res) => {
  db.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json({ success: true, time: results[0].currentTime });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM Users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
          if (result.length > 0) {
             const user = result[0];
             const userName = user.username;           // assuming you have an `id` column
             const userRoll = user.userroll;       // assuming you have a `roll` column
             const userEmailid = user.emailid;   // example            req.session.userId = result[0].id;
            res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed. Invalid username or password.' });
        localStorage.setItem('userRoll', "");  // or sessionStorage
      }
    }
  });
});

app.post('/register', (req, res) => {
  const { username, password,address,emailid,roll } = req.body;

  const sql = 'insert into Users(username,password,address,emailid,userroll) values(?,?,?,?,?)';
  db.query(sql, [username, password, address, emailid, roll], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.affectedRows > 0) {
        res.status(200).json({ 
          message: 'User created successfully',
          userId: result.insertId  // optionally return the new user's id
        });
      } else {
        res.status(400).json({ message: 'Registration failed. Please try again.' });
      }
    }
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
