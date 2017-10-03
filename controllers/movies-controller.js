let Movie = require('../models/movie');

module.exports.create = (req, res) => {
  let movie = new Movie(req.body);
  movie.save((err,result)=> {
    res.json(result);
  });
}

module.exports.list = (req, res) => {
  Movie.find({}, (err, results) => {
    res.json(results);
  });
}
