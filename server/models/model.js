
// require('../config/config')();
// var mongoose = require('mongoose');
var mongoose = require('../config/config')
var Schema = mongoose.Schema;



var TasksSchema = new Schema({
            title: {type: String}, 
            description: {type: String}, 
           }, {timestamps: true})


taskModel = mongoose.model('task', TasksSchema);


module.exports = taskModel;




