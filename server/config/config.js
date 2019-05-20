var mongoose = require('mongoose');

// module.exports = function(){
//     mongoose.connect('mongodb://localhost/restful')
// }

mongoose.connect('mongodb://localhost:27017/helloAngular')

module.exports = mongoose;

