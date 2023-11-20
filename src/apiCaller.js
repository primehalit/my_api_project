// src/apiCaller.js

const fetch = require('node-fetch');

async function callAPI() {
  const apiURL = 'https://api.genderize.io?name=luc';

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log('API Cevabı:', data);
    return JSON.stringify(data); // API'den gelen veriyi geri döndür
  } catch (error) {
    console.error('API Hatası:', error);
    return 'API çağrısında bir hata oluştu';
  }
}

module.exports = callAPI;
