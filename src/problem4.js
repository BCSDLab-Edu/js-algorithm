function problem4(word) {
  var answer=[];
  word.split('').forEach(text => {
    let textord=text.charCodeAt()
    if(text===" ") answer.push(text);
    else if(textord>96) answer.push(String.fromCharCode(122-(textord-97)))
    else answer.push(String.fromCharCode(90-(textord-65)))
  });
  return answer.join('');
}

module.exports = problem4;