function problem5(money) {
  won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = new Array(9);

  for (let i = 0; i < won.length; i++) {
    answer[i] = Math.floor(money / won[i]);
    money %= won[i];
  }
  return answer;
}

module.exports = problem5;
