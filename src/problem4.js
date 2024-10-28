function problem4(word) {
  let arr = Array.from(word);

for (let i = 0; i < arr.length; i++) {
  let ascii = arr[i].charCodeAt(0);  
  if (ascii >= 65 && ascii <= 90) {  
    arr[i] = String.fromCharCode(155 - ascii);
  } else if (ascii >= 97 && ascii <= 122) {  
    arr[i] = String.fromCharCode(219 - ascii);
  }
}

let result = arr.join(''); 
return result;

}

module.exports = problem4;
