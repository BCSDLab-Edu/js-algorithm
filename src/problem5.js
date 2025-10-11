function problem5(money) {
  const change = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = Array(change.length).fill(0);
  let i = 0;
  while(money !== 0){
    answer[i] = parseInt(money/change[i]);
    money = money % change[i];
    i++;
  }
  return answer;
}

module.exports = problem5;
