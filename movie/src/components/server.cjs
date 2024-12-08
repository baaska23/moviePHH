const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'postgre',
  host: 'localhost',
  database: 'postgres',
  password: '99997115',
  port: 5432,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// тасалбар төлөлтийн дэлгэрэнгүй мэдээллийг database-д хадгалах
app.post('/api/payment', async (req, res) => {
  console.log("Request body:", req.body);
  const { name, email, phone, paymentMethod, totalCost } = req.body;

  if (!name || !email || !phone || !paymentMethod || !totalCost) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const result = await pool.query(
      'INSERT INTO payments (name, email, phone, payment_method, total_cost) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, paymentMethod, totalCost]
    );
    console.log("Inserted row:", result.rows[0]); // Log inserted data
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Database error:", err.stack);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

// киноны датаг database-с дуудах
app.get('/movies', async (req, res) => {
  try{
    const result = await pool.query('SELECT * FROM movies');
    res.json(result.rows);
  } catch(err){
    console.error(err)
    res.status(500).send('Server error')
  }
});

// тун удахгй гарах киноны датаг database-с дуудах
app.get('/coming_soon_movies', async (req, res) => {
  try{
    const result = await pool.query('SELECT * FROM coming_soon_movies');
    res.json(result.rows);
  } catch(err){
    console.error(err)
    res.status(500).send('Server error')
  }
});

// нүүр хуудсанд байрлах киноны датаг database-с дуудах
app.get('/home_movie', async(req, res) => {
  try{
    const result = await pool.query('SELECT * FROM home_movie');
    res.json(result.rows)
  }catch(err){
    console.error(err)
    res.status(500).send('Server error')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
