function problem4(word) {
  var answer;
  var wordList = word.split("");
  var n;
  var changedWord = "";
  for(var i=0; i<wordList.length; i++){
    if(wordList[i]==" "){
      continue;
    }
    if(wordList[i].charCodeAt()>=97 && wordList[i].charCodeAt()<=122){
      n = wordList[i].charCodeAt() - 97;
      wordList[i] = String.fromCharCode(122 - n);
    }

    else if(wordList[i].charCodeAt()>=65 && wordList[i].charCodeAt()<=90){
      n = wordList[i].charCodeAt() - 65;
      wordList[i] = String.fromCharCode(90 - n);
    }
  }
  for(var j=0; j<wordList.length; j++){
    changedWord = changedWord + wordList[j];
  }

  answer = changedWord;
  return answer;
}

module.exports = problem4;
