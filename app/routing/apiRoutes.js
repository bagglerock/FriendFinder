var friends = require("../data/friends");

module.exports = function(app) {

  function checkDupe(person) {
    var dupe = false;
    for (var i = 0; i< friends.length; i++){
      if (person.name === friends[i].name && person.photo === friends[i].photo){
          dupe = true;
      }
    }
    return dupe;
  
  }

  function findMatch(person) {
    var mostCompatible;
    var mostCompatibleScore;

    for(var i = 0; i < friends.length; i++){
      var compatibilityComparison = 0;
      if(person.name !== friends[i].name && person.photo !== friends[i].photo){
        for (var j = 0; j < person.scores.length; j++){
          compatibilityComparison += Math.abs(parseInt(person.scores[j]) - parseInt(friends[i].scores[j]));
        } 
        if (mostCompatibleScore && compatibilityComparison < mostCompatibleScore){
            mostCompatible = friends[i].name;
            mostCompatibleScore = compatibilityComparison;
        } else {
          mostCompatible = friends[i].name;
          mostCompatibleScore = compatibilityComparison;
        }
      }

    }
    return mostCompatible;

  }



  // Get ALL friends
  app.get('/api/friends', function(req, res) {
    return res.json(friends);
  });

  app.post('/api/friends', function(req, res) {

    var newFriend = req.body;

    var match = findMatch(newFriend);

    friends.push(newFriend);
    console.log("Most compatible match is " + match);
    res.json(newFriend);

  });

};
