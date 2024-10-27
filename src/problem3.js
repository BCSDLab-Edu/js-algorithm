function problem3(number) {
  let cnt = 0;

  for (let i = 1; i <= number; i++) {
    let str = String(i).split("");
    for (let j = 0; j < str.length; j++) {
      var tmp = Number(str[j]);
      if (tmp % 3 == 0 && tmp != 0) {
        cnt += 1;
      }
    }
  }
  return cnt;
}

module.exports = problem3;
