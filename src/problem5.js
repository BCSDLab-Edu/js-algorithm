function problem5(money) {
  var answer=[];
  const bills=[50000,10000,5000,1000,500,100,50,10,1];
  let nowMoney=money;
  bills.forEach(bill => {
    answer.push(Math.floor(nowMoney/bill));
    nowMoney%=bill;
  });
  return answer;
}

module.exports = problem5;
