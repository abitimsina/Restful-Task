var controller = require('../controllers/controller');

module.exports = function (app) {

    // '/api'
    app.get('/tasks', function (req, res) {
        controller.listAllTasks(req, res);
    });

    app.get('/tasks/one/:id', function (req, res) {
        controller.showOne(req, res);
    });

    app.post('/tasks/new', function (req, res) {
        controller.createTask(req, res);
    });

    app.put('/tasks/update/:id', function (req, res) {
        controller.updateTask(req, res);
    });
    app.delete('/tasks/rmv/:id', function (req, res) {
        controller.remove(req, res);
    });

    // app.post('/remove/:id', function(req, res) {
    //     controller.remove(req,res);
    // });


};






