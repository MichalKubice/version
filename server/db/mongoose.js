var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mike:mike26@ds123584.mlab.com:23584/todo_testing");

module.exports = {mongoose};
