function problem3(number) {
  var answer;
  answer = 0;
  for (var num = 1; num < number + 1; num++){
    for (var list of String(num)){
      if (list == '3' || list == '6' || list == '9'){
        answer += 1;
      }
    }
  }
  return answer;
}

module.exports = problem3;
