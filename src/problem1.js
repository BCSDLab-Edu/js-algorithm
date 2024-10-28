function problem1(pobi, crong) {
  var answer;
  var n1;
  var n2 = pobi[0];
  var sum = 0;
  var mul = 1;

  if(pobi[0]+1 != pobi[1] || crong[0]+1 != crong[1]){
    answer = -1;
    return answer;
  }

  while(n2!=0){
    n1 = n2 % 10;
    n2 = Math.floor(n2 / 10);

    sum = sum + n1;
    mul = mul * n1;
  }
  var leftP = Math.max(sum, mul); //포비 왼쪽에서 큰 값

  n2 = pobi[1];
  sum = 0;
  mul = 1;
  while(n2!=0){
    n1 = n2 % 10;
    n2 = Math.floor(n2 / 10);

    sum = sum + n1;
    mul = mul * n1;
  }
  var rightP = Math.max(sum, mul); //포비 오른쪽에서 큰 값

  n2 = crong[0];
  sum = 0;
  mul = 1;
  while(n2!=0){
    n1 = n2 % 10;
    n2 = Math.floor(n2 / 10);

    sum = sum + n1;
    mul = mul * n1;
  }
  var leftC = Math.max(sum, mul); //크롱 왼쪽에서 큰 값

  n2 = crong[1];
  sum = 0;
  mul = 1;
  while(n2!=0){
    n1 = n2 % 10;
    n2 = Math.floor(n2 / 10);

    sum = sum + n1;
    mul = mul * n1;
  }
  var rightC = Math.max(sum, mul); //크롱 오른쪽에서 큰 값

  pobi = Math.max(leftP, rightP);
  crong = Math.max(leftC, rightC);

  if(pobi>crong){
    answer = 1;
  }
  else if(pobi<crong){
    answer = 2;
  }
  else if(pobi==crong){
    answer = 0;
  }
  return answer;
}

module.exports = problem1;