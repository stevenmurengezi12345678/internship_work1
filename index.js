const express = require('express');
const db = require('./config/db');


const app = express();
const port = 3000;

app.use (express.json());


//create arecord
app.post('/user', (req, res) => {
  const { studentName, age, Gender, joinDate } = req.body;
  //insert into database
  db.query('INSERT INTO students (studentName, age, Gender, joinDate) VALUES (?, ?, ?, ?)', [studentName, age, Gender, joinDate], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create record' });
    }
    return res.status(201).json({ message: 'Record created successfully' });
  });
});

app.get('/user', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Error fetching records:', err);
      return res.status(500).json({ error: 'Failed to fetch records' });
    }
    return res.status(200).json(results);
  });
});

app.delete('/user/:id', (req, res) => {
  db.query('DELETE FROM students WHERE id = ?', [req.params.id], (err, result) => {
    if (err) {
      console.error('Error deleting record:', err);
      return res.status(500).json({ error: 'Failed to delete record' });
    }
    return res.status(200).json({ message: 'Record deleted successfully' });
  });
}); 


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});