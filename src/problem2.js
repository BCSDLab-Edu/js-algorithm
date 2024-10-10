function problem2(cryptogram) {
  var pre_str = cryptogram ;
  var now_str ;
  while (1) {
    now_str = search_str(pre_str)
    if (now_str == pre_str || now_str.length == 0) {
      return now_str ;
    }
    pre_str = now_str;
  }
}

function search_str(now_str) {
  for (var i = 0;i < now_str.length - 1;i++) {
    if (now_str[i] == now_str[i + 1]) {
      return now_str.slice(0, i) + now_str.slice(i + 2);
    } 
  }
  return now_str;
}

module.exports = problem2;
