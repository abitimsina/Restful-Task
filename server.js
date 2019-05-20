var express = require("express");
var app = express();
app.use(express.static( __dirname + '/public/dist/public' ));
var bodyParser = require("body-parser");
app.use(bodyParser.json());
require('./server/config/config')

var routes = require('./server/routes/route.js')(app); 
// routes(app);

app.listen(8000, () => {
    console.log('listening on port 8000');

});


