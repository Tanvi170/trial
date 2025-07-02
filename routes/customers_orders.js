const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'bmvzzbteufhymoisty4h-mysql.services.clever-cloud.com',
  user: 'uee47qm4losiwncn',             // Your Clever Cloud MySQL user
  password: 'STN1f8lwqdPAavC3asDJ', // Replace with your Clever Cloud MySQL password
  database: 'bmvzzbteufhymoisty4h',       // Your Clever Cloud DB name
  port: 3306
});


router.get('/', (req, res) => {
  db.query('SELECT customer_id, customer_name FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
