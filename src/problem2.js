function problem2(cryptogram) {
  const stack = [];
  let secret = cryptogram.split("");
  for( let i = 0; i < secret.length; i++){
    stack.push(secret[i]);
    if(stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]){
      stack.pop();
      stack.pop();
    }
  }
  return stack.join("");
}

module.exports = problem2;
