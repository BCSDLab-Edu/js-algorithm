function problem2(cryptogram) {
  const stack = [];

  for (let i = 0; i < cryptogram.length; i++) {
    const char = cryptogram[i];

    if (stack[stack.length-1] === char){
      stack.pop();
    } 
    
    else {
      stack.push(char);
    }
  }

  return stack.join("")
}

module.exports = problem2;
