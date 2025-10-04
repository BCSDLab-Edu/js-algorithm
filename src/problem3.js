function problem3(number) {
  var answer;
  answer = 0;
  for (let i = 1; i <= number; i++) {
    n=i;
    while (n>0) {
      r=n%10;
      if (r === 3
        || r === 6
        || r === 9
      ) {
        answer++;
      }
      n=Math.floor(n/10);
    }
  }
  return answer;
}

module.exports = problem3;
