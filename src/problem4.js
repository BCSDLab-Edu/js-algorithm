function problem4(word) {
  var res_str = '';
  var now_ascii = 0;
  for (i = 0;i < word.length;i++) {
    if (word[i] == ' ') {
      res_str += ' ';
    } else {
      now_ascii = word.charCodeAt(i);
      if (now_ascii < 91) {
        res_str += String.fromCharCode(90 - (now_ascii - 65));
      } else {
        res_str += String.fromCharCode(122 - (now_ascii - 97));
      }
    }
  }
  return res_str ;
}

module.exports = problem4;
