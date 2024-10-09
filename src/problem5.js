function problem5(money) {
  const answer = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
    .map(div => {
      [ret, money] = [Math.floor(money / div), money % div];
      return ret;
    }
  );
  return answer;
}

module.exports = problem5;
