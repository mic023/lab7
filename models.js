
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  title: String,
  date:{type:Date, default: Date.now},
  summary: String,
  image: Mongoose.Schema.Types.Mixed
});

exports.Project = Mongoose.model('Project', ProjectSchema);


