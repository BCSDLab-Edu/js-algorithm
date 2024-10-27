function problem5(money) {
  const moneyUnit= [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  moneyUnit.forEach(unit => {
    result.push(Math.floor(money/unit));
    money %= unit; 
  });
  
  return result;
}

module.exports = problem5;
