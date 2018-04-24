var uuid = require('uuid/v4');
var reservations = require("../data/resData");

module.exports = function(app) {

  // Get ALL tables/reservations
  app.get('/api/tables', function(req, res) {
  
    return res.json(reservations);

  });

  // POST a new reserveration
  app.post('/api/tables/new', function(req, res) {

    var newRes = req.body;

    newRes.id = uuid();

    console.log(newRes);

    reservations.push(newRes);

    res.json(newRes);

  });


};
