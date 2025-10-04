function problem6(forms) {
  var answer;
  answer = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      if (checkSimilar(forms[i][1], forms[j][1])) {
        if (!answer.includes(forms[i][0])) {
          answer.push(forms[i][0]);
        }
        if (!answer.includes(forms[j][0])) {
          answer.push(forms[j][0]);
        }        
      }
    }
  }
  return answer.sort();
}
function checkSimilar(_name1, _name2) {
  for (let i = 1; i < _name1.length; i++) {
    for (let j = 1; j < _name2.length; j++) {
      if ((_name1[i-1] === _name2[j-1])
        && (_name1[i] === _name2[j])) {
        return true;
      }
    }
  }
  return false;
}
module.exports = problem6;
