//Feel free to change the file name 
const express = require('express');
const app = express();
var PORT = 3000; // Feel free to link your dotenv here

// Some stupid stuff express needs
app.use(express.static('./public')); // This is so then express reads your css/js/img files :)
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//This is the index.htmk reference
app.get('/', (req, res) => {
  res.render('index.html');
});


/*
app.get('/about', (req, res) => {
  res.render('about.html')
});
//What this does is its just an extra page feel free to change about to whatever you like, but make sure the file name always has .html at end
*/

//This here starts your app 
app.listen(PORT, () => console.log(`Website at http://localhost:3000`)) // You can replace 3000 with ${PORT}
