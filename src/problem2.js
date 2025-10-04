function problem2(cryptogram) {
  var answer;
  let i=0;
  answer = cryptogram;
  while (i<answer.length-1) {
    if (answer[i] === answer[i+1]) {
      answer = answer.slice(0,i) + answer.slice(i+2);
      i=0;
      continue;
    }
    i++;
  }
  return answer;
}

module.exports = problem2;