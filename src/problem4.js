function problem4(word) {
  const dict = new Map();

  for (let i = 0; i < 26; i++) {
    const upper = String.fromCharCode(65+i);
    const reverseUpper = String.fromCharCode(90-i);
    dict.set(upper, reverseUpper);
  }

  for (let i = 0; i < 26; i++) {
    const lower = String.fromCharCode(97+i);
    const reverseLower = String.fromCharCode(122-i);
    dict.set(lower, reverseLower);
  }

  let result = "";

  for (const char of word) {
    if (dict.has(char)) {
      result += dict.get(char);
    } 

    else {
      result += char;
    }
  }
  
  return result;
}

module.exports = problem4;
