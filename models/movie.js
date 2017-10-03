let mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
  title: String,
  releaseDate: Date,
  starring: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Movie', MovieSchema);
