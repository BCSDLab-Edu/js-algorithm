function problem4(word) {
  var word_list_rev =[];
  var word_list = word.split('');

  for(var i = 0; i< word.length; i++){
    var askii = word_list[i].charCodeAt(0); //문자열 첫번째 아스키코드값 가져오기

    if(askii >= 65 && askii <= 90){
      word_list_rev.push(String.fromCharCode(155-askii));
    }
    else if(askii >= 97 && askii <= 122){
      word_list_rev.push(String.fromCharCode(219-askii));
    }
    else{
      word_list_rev.push(' ');
    }
  }
  return word_list_rev.join('');
}

module.exports = problem4;
