let mongoose = require('mongoose');

let ActorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  starredIn: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Actor', ActorSchema);
