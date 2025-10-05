function problem4(word) {
  var answer;
  answer = '';
    
  var code = [0, 0];
  var startWord = ['A'.charCodeAt(), 'a'.charCodeAt()];
  var endWord = ['Z'.charCodeAt(), 'z'.charCodeAt()];
    
  for (var loc = 0; loc < word.length; loc++){
    for (var upDown = 0; upDown < code.length; upDown++){
      code[upDown] = startWord[upDown] + endWord[upDown] - word[loc].charCodeAt(); 
      if (code[upDown] <= endWord[upDown] && code[upDown] >= startWord[upDown]){
        answer += String.fromCharCode(code[upDown]);
        break;
      }
      if (upDown == 1){
        answer += word[loc];
      }
    }
  }
  return answer;
}

module.exports = problem4;
