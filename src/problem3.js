function problem3(number) {
  var answer = 0;
  let now = 1;
  while (now !== number + 1) {
    now.toString().split('').forEach(num => {
      if (num !== '0' && num % 3 === 0) answer++;
    })
    now++;
  }
  return answer;
}

module.exports = problem3;
