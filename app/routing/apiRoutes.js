var friends = require("../data/friends");

module.exports = function(app) {

  // Get ALL friends
  app.get('/api/friends', function(req, res) {
  
    return res.json(friends);

  });

  app.post('/api/friends', function(req, res) {
    //add compatibility logic here
    var newFriend = req.body;
    var newFriendName = newFriend.name;
    var newFriendPhoto = newFriend.photo;
    var newFriendScore = newFriend.scores;
    //boolean or something to hold the name of the most compatible and the score of the most compatible
    var mostCompatible = "";
    var mostCompatibleScore = "";

    for (var i = 0; i < friends.length ; i++){
      var name = friends[i].name;
      var photo = friends[i].photo;
      var score = friends[i].scores;
      compatibilityScore = 100;
      if(newFriendName !== name && newFriendPhoto !== photo){
        for (var j = 0; j < score.length; j++){
          //compare the scores using Math.abs(int);
          compatibilityScore += Math.abs(parseInt(newFriendScore[j]) - parseInt(score[j]));
          if(compatibilityScore < mostCompatibleScore){
            mostCompatible = name;
            mostCompatibleScore = compatibilityScore;
          }
        }

      }
      console.log("Most compatible match is " + mostCompatible);
    }

    friends.push(newFriend);
    res.json(newFriend);

  });


};
