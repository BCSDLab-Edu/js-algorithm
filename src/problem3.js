function problem3(number) {
  var res = 0;
  for (var i = 1;i <= number;i++) {
    now_str = i.toString();
    res += search_369(now_str, '3');
    res += search_369(now_str, '6');
    res += search_369(now_str, '9');
  }
  return res;
}

function search_369(str, num) {
  return str.split(num).length - 1 ;
}

module.exports = problem3;
