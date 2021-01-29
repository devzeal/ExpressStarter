//Feel free to change the file name 
const express = require('express');
const app = express();
var PORT = 3000; // Feel free to link your dotenv here

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.listen(PORT, () => console.log(`Website at http://localhost:3000`) // You can replace 3000 with ${PORT}););
