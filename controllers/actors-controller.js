let Actor = require('../models/actor');

module.exports.create = (req, res) => {
  let actor = new Actor(req.body);
  actor.save((err,result)=> {
    res.json(result);
  });
}

module.exports.list = (req, res) => {
  Actor.find({}, (err, results) => {
    res.json(results);
  });
}

module.exports.getActor = (req,res) => {
	let id = req.body.id;
	Actor.findOne({_id:id}, (err, result) => {
    res.json(result);
  });
}
