function problem2(cryptogram) {
  var answer=[];//스택처럼
  cryptogram.split('').forEach( text =>{
    if(answer.length===0) answer.push(text);
    else if(answer[answer.length - 1]===text) answer.pop();
    else answer.push(text);
  })

  return answer.join('');
}

module.exports = problem2;
