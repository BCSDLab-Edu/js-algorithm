function problem3(number) {
  let cnt = 0;

  for (let i = 1; i <= number; i++) {
    let str = String(i).split("");
    for (let j = 0; j < number; j++) {
      if (str[j] == 3 || str[j] == 6 || str[j] == 9) {
        cnt += 1;
      }
    }
  }
  return cnt;
}

module.exports = problem3;
