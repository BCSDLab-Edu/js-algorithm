function problem1(pobi, crong) {
  var answer;
  var page = [pobi, crong];
  var sum = [0, 0];
  var hundred, ten, one;
    
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1){
      answer = -1;
      return answer;
  }

  for (var pageNum = 0; pageNum < page.length; pageNum++){
    for (var parity = 0; parity < page[pageNum].length; parity++){
        if (page[pageNum][parity] < 1 || page[pageNum][parity] > 400 || page[pageNum][0] % 2 != 1){
          answer = -1;
          return answer;
        }
      for (var arithmetic = 0; arithmetic < sum.length; arithmetic++){
        hundred = Math.trunc(page[pageNum][parity] / 100);
        ten = Math.trunc(page[pageNum][parity] %100 / 10);
        one = Math.trunc(page[pageNum][parity] %10);
          
        if (arithmetic == 0){
          if (sum[pageNum] < hundred + ten + one){
            sum[pageNum] = hundred + ten + one; 
          }
        } else {
          if (hundred == 0){
              hundred = 1;
              if (ten == 0){
                  ten = 1;
              }
          }
          if (sum[pageNum] < hundred * ten * one){
            sum[pageNum] = hundred * ten * one;
          }
        }
      }
    }
  }
  if (sum[0] > sum[1]){
    answer = 1;
  } else if (sum[0] == sum[1]){
    answer = 0;
  } else if (sum[0] < sum[1]){
    answer = 2;
  }
  return answer;
}

module.exports = problem1;