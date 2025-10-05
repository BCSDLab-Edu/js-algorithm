function problem6(forms) {
  var answer;
  answer = [];
  sort = '';
  for (var member = 0; member < forms.length; member++){
    for (var word = 0; word < forms[member][1].length - 1; word++){
      for (var check = 0; check < forms.length; check++){
        if (member != check){
          keyword = forms[member][1][word] + forms[member][1][word + 1];
          if (forms[check][1].indexOf(keyword) !== -1){
              answer.push(forms[member][0]);
              break;
          }
        }
      }
    }
  }
  for (var loc = 0; loc < answer.length - 1; loc++){
    if (answer[loc] > answer[loc + 1]){
      sort = answer[loc + 1];
      answer[loc + 1] = answer[loc];
      answer[loc] = sort;
    }
  }
  return answer;
}

module.exports = problem6;
