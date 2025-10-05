function problem5(money) {
  var answer;
  // [5만, 1만, 5천, 1천, 5백, 1백, 5십, 1십, 일]
  answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  copyMoney = money
  paper = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (var count = 0; count < paper.length; count++){
    if (copyMoney / paper[count] >= 1){
      answer[count] = Math.trunc(copyMoney / paper[count]);
      copyMoney = copyMoney % paper[count];
    }
  }
  return answer;
}

module.exports = problem5;
