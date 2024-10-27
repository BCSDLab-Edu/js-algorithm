function problem1(pobi, crong) {
  if(pobi[0]+1 === pobi[1] && crong[0]+1 === crong[1]){
    var pobi_num;
    var crong_num;
    var multiple_num=1;
    var addition_num=0;
    var answer;

    function get_num(arr){
      for(var i=0; i<2; i++){
        var maxvalue;

        n = arr[i].toString();
        for(let j of n){
          addition_num += Number(j);
          multiple_num *= Number(j);
        }
        if (addition_num > multiple_num){
          arr[i] = addition_num;
        }
        else{
          arr[i] = multiple_num;
        }
        addition_num = 0;
        multiple_num = 1;
      }
      if(arr[0] > arr[1]){
        maxvalue = arr[0];
      }
      else
        maxvalue = arr[1];
      return maxvalue;
    }

    pobi_num = get_num(pobi);
    crong_num = get_num(crong);

    if(pobi_num > crong_num){
      answer = 1;
    }
    else if(pobi_num < crong_num){
      answer = 2;
    }
    else if(pobi_num == crong_num){
      answer = 0;
    }
    else{
      answer = -1;
    }
  } else answer = -1;
  
  return answer;
}

module.exports = problem1;
