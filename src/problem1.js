function problem1(pobi, crong) {
  var answer;
  var pobi_max, crong_max ;

  if (pobi[0] % 2 == 0 || pobi[1] % 2 == 1 || crong[0] % 2 == 0 || crong[1] % 2 == 1 || pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) {
    return -1;
  }

  pobi_1 = pobi[0].toString(); pobi_2 = pobi[1].toString();
  crong_1 = crong[0].toString(); crong_2 = crong[1].toString();
  pobi_max = Math.max(Math.max(plus(pobi_1), plus(pobi_2)), Math.max(multi(pobi_1), multi(pobi_2)))
  crong_max = Math.max(Math.max(plus(crong_1), plus(crong_2)), Math.max(multi(crong_1), multi(crong_2)))

  if (pobi_max > crong_max) {
    return 1;
  } else if (pobi_max < crong_max) {
    return 2;
  } else {
    return 0;
  }
}

function plus(now_num) {
  var res = 0;

  for (i = 0;i < now_num.length;i++) {
    res += parseInt(now_num.substring(i, i + 1));
  }
  
  return res;
}

function multi(now_num) {
  var res = 1;

  for (i = 0;i < now_num.length;i++) {
    res *= parseInt(now_num.substring(i, i + 1));
  }
  
  return res;
}
module.exports = problem1;
