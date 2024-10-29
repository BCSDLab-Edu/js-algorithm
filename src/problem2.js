function problem2(cryptogram) {
  var answer = [];
  for (let char of cryptogram) {
    if (answer.length > 0 && answer[answer.length-1] === char) {
      answer.pop();
    }
    else {
      answer.push(char);
    }
  }
  return answer.join('');
}

module.exports = problem2;
