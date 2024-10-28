function problem3(number) {
  var answer;
  var n1;
  var n2;
  var count = 0;
  var d = 0;
  for(var i=1; i<number+1; i++){
    n2 = i;

    while(n2!=0){
      n1 = n2 % 10;
      if(n1==3 || n1==6 || n1==9){
        count++;
      }
      n2 = Math.floor(n2 / 10);
    }
    
  }
  answer = count;
  return answer;
}
module.exports = problem3;
