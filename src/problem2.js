function problem2(cryptogram) {
  var answer;
  var word = "";
  var string = cryptogram.split("");
  var strlen = 0;

  while(string.length!=strlen){
    strlen = string.length;
    for(var i=1; i<string.length; i++){
      if(string[i-1] == string[i]){
        string.splice(i-1, 2);
      }
    }
  }

  for(var j=0; j<string.length; j++){
    word = word + string[j];
  }
  answer = word;

  return answer;
}

module.exports = problem2;
