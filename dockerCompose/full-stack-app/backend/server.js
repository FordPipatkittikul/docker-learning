require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const { Client } = require('pg');
const app = express();

const client = new Client({
  host: 'db', // Database service defined in Docker Compose
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

client.connect();
app.get('/', (req, res) => res.send('Connected to PostgreSQL'));

app.listen(5000, () => console.log('Backend running on port 5000'));
