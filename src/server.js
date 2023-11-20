// src/server.js

const express = require('express');
const app = express();
const port = 3000;
const apiCaller = require('./apiCaller');

app.get('/', async (req, res) => {
  const apiResponse = await apiCaller(); // apiCaller.js'den API çağrısını yap
  res.send(`Merhaba, Express.js sunucusuna hoş geldiniz! API Cevabı: ${apiResponse}`);
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
