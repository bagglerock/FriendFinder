
var friends = require("../data/friends");

module.exports = function(app) {

  // Get ALL friends
  app.get('/api/friends', function(req, res) {
  
    return res.json(friends);

  });

  // POST a new reserveration
  app.post('/api/friends', function(req, res) {

    var newRes = req.body;


    console.log(newRes);

    friends.push(newRes);

    res.json(newRes);

  });


};
