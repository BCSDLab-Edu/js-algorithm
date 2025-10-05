function problem7(user, friends, visitors) {
  var answer = [];
  var relative = [];
  var score = [];
  for (var num = 0; num < friends.length; num++){
    for (var AB = 0; AB < friends[num].length; AB++){
      if (friends[num][AB] == user){
        relative.push(friends[num][1 - AB]); 
      }
    }
  }
  for (var num = 0; num < friends.length; num++){
    for (var AB = 0; AB < friends[num].length; AB++){
      friendsLoop:
      for (var num2 = 0; num2 < relative.length; num2++){
        if (friends[num][AB] == relative[num2] && friends[num][1 - AB] != user){
          for (var index = 0; index < score.length; index++){
            if (score[index][0] == friends[num][1 - AB]){
              score[index][1] += 10;
              continue friendsLoop;
            }
          }
          score.push([friends[num][1 - AB], 10]);
        }
      }
    }
  }
  visitorsLoop:
  for (var num = 0; num < visitors.length; num++){
    if (relative.indexOf(visitors[num]) == -1 && visitors[num] != user){
      for (var index = 0; index < score.length; index++){
        if (score[index][0] == visitors[num]){
          score[index][1] += 1;
          continue visitorsLoop;
        }
      }
      score.push([visitors[num], 1]);
    }
  }
  for (var index = 0; index < score.length; index++){
    score[index].sort();
  }
  score.sort();
  for (var result = 0; result < score.length; result++){
    answer.push(score[result][1]);
  }
  return answer;
}

module.exports = problem7;
