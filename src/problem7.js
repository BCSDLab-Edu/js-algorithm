function problem7(user, friends, visitors) {
  var answer = [];
  var userFriends = new Set();
  var score = new Map();
  var name = [];
  for(var i=0; i<friends.length; i++){
    if(friends[i][0]==user){
      userFriends.add(friends[i][1]);
    }
    if(friends[i][1]==user){
      userFriends.add(friends[i][0]);
    }
  }
  
  for(var k=0; k<friends.length; k++){
    if(userFriends.has(friends[k][0])){
      if(friends[k][1]==user){
        continue;
      }
      if(score.has(friends[k][1])){
        var n = score.get(friends[k][1]);
        score.delete(friends[k][1]);
        score.set(friends[k][1], n+=10);
      }
      else{
        score.set(friends[k][1], 10);
      }
    }

    if(userFriends.has(friends[k][1])){
      if(friends[k][0]==user){
        continue;
      }
      if(score.has(friends[k][1])){
        var n = score.get(friends[k][1]);
        score.delete(friends[k][1]);
        score.set(friends[k][1], n+=10);
      }
      else{
        score.set(friends[k][1], 10);
      }
    }
  }

  for(var j=0; j<visitors.length; j++){
    if(userFriends.has(visitors[j])){
      continue;
    }
    if(score.has(visitors[j])){
      var n = score.get(visitors[j]);
      score.delete(visitors[j]);
      score.set(visitors[j], n+=1);
    }
    else{
      score.set(visitors[j], 1);
    }
  }

  name = Array.from(score);
  name.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  for(var l=0; l<score.size; l++){
    answer.push(name[l][0]);
  }
  return answer;
}

module.exports = problem7;
