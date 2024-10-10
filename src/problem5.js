function problem5(money) {
  var res_list = [0, 0, 0, 0, 0, 0, 0, 0, 0] ;
  var money_list = {0 : 50000, 1 : 10000, 2 : 5000, 3 : 1000, 4 : 500, 5 : 100, 6 : 50, 7 : 10, 8 : 1} ;
  var now_won = 0 ;

  for (i = 0;i < 9;i++) {
    now_won = money_list[i] ;
    res_list[i] = Math.floor(money / now_won) ;
    money %= now_won ;
  }
  
  return res_list ;
}

module.exports = problem5;
