function problem3(number) {
  var answer=0;
  for (let i=1; i<=number; ++i){
    let currentNumber = i;
    while (currentNumber>0) {
      let target = currentNumber%10;
      currentNumber = Math.floor(currentNumber/10);
      if (target == 3 || target == 6 || target == 9) ++answer;
    }
  }
  return answer;
}

module.exports = problem3;
