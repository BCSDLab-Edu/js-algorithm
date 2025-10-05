function problem2(cryptogram) {
  var answer;
  var text = cryptogram;
  while (true){
    answer = text;
    text = '';
    for (var loc = 0; loc < answer.length; loc++){
      if (answer[loc] == answer[loc + 1]){
        loc += 1;
        continue;
      }
      text += answer[loc];
    }
    if (answer == text){
        return answer
    }
  }
}

module.exports = problem2;
