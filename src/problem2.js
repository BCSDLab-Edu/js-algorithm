function problem2(cryptogram) {
  var answer;
  var stack = [];
  var length = 0;

  n = cryptogram;
  for(let j = 0; j < n.length; j++){
    stack.push(n[j]);
  }
  while(length != stack.length){
    length = stack.length;

    for(var i=0; i<stack.length; i++){
      if(stack[i] === stack[i+1]){
        stack.splice(i,2);
        i--;
      }
    }
    answer = stack.join("");
  }
  
  return answer;
}

module.exports = problem2;
