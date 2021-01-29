//Feel free to change the file name 
const express = require('express');
const app = express();
var PORT = 3000; // Feel free to link your dotenv here

// Some stupid shit express needs
app.use(express.static('./public')); // This is so then express reads your css/js/img files :)
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(PORT, () => console.log(`Website at http://localhost:3000`)) // You can replace 3000 with ${PORT}
