function problem5(money) {
  var answer;
  var n1;
  var n2 = money;
  var change;
  var moneyList = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var i = 8;
  while(i>=0){
    n1 = n2 % 10;
    if(i==8){
      moneyList[i] = n1;
    }
    else if(i%2==1){
      change = n1;
      while(change>=5){
        change = change % 5;
        moneyList[i-1]++;
      }
      moneyList[i] = change;
      i--;
    }
    else if(i%2==0){
      if(i==0){
        moneyList[i] = moneyList[i] + n1;
      }
      else{
        change = n1;
        if(change>=2){
          while(change>=2){
            change = change % 2;
            moneyList[i-1]++;
          }
        }
        moneyList[i] = change;
        i--;
      }
    }
    n2 = Math.floor(n2 / 10);
    i--;
  }

  answer = moneyList;
  return answer;
}

module.exports = problem5;
