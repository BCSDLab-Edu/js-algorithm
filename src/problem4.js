function problem4(word) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      const newCharCode = 90 + 65 - charCode;
      result += String.fromCharCode(newCharCode);
    } 
    else if (charCode >= 97 && charCode <= 122) {
      const newCharCode = 122 + 97 - charCode;
      result += String.fromCharCode(newCharCode);
    } 
    else {
      result += char;
    }
  }
  return result;
}


module.exports = problem4;
