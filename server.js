let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let actorsController = require('./controllers/actors-controller');
let moviesController = require('./controllers/movies-controller');

mongoose.connect('mongodb://localhost:27017/sixdegrees');

app.use(bodyParser());

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/ngApp/views/index.html')
});

app.use('/app', express.static(__dirname + '/ngApp'));

app.get('/api/actors', actorsController.list);
app.post('/api/actors', actorsController.create);

app.get('/api/movies', moviesController.list);
app.post('/api/movies', moviesController.create);

let port = 3333;
app.listen(port, ()=>{
  console.log("App listening on port " + port);
});
