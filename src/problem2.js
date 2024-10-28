function problem2(cryptogram) {
  
  let arr = cryptogram.split("");
  var cnt;
  
  while(true){

    let cnt = true;
    
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]==arr[i+1])
      {
        arr.splice(i,2);
        cnt = false;
        break;
      }
      cnt = true;
    }
    n = arr.length;
    if(cnt || n == 0)
      break;
  }
  
  let str = arr.join("")
  return str;

}

module.exports = problem2;
