function problem5(money) {
  var answer;
  answer = [];
  const coinTypes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let c of coinTypes) {
    answer.push(Math.floor(money / c));
    money = money % c;
  }
  return answer;
}

module.exports = problem5;
