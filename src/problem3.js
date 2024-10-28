function problem3(number) {
  
  let cnt=0;
  for(let i=1;i<=number;i++){
    let arr=i.toString().split("");
    for(let j=0;j<arr.length;j++){
      if(arr[j]==3){
        cnt++;
      }
      else if(arr[j]==6){
        cnt++;
      }
      else if(arr[j]==9){
        cnt++;
      }
    }
  }

  return cnt;
}

module.exports = problem3;
