function problem1(pobi, crong) {
  let Add = 0;
  let Mul = 1;
  let pobi_max;
  let crong_max;
  
  if(pobi[0]!==pobi[1]-1 || crong[0]!==crong[1]-1)
    return -1;

  function name(arr){
    for (let i=0; i<2; i++ ){
      let Max = 0;
      
      let n=arr[i].toString();
      
      for(let j of n){
        Add += Number(j);
        Mul *= Number(j);
      }
      if(Add>Mul)
        arr[i]=Add;
      
      else 
        arr[i]=Mul;
      
      Add = 0;
      Mul = 1;
  }

  if(arr[0]>arr[1])
    Max = arr[0];
  else 
    Max = arr[1];

  return Max;

  }

  pobi_max = name(pobi);
  crong_max = name(crong);

  if(pobi_max>crong_max)
    return 1;
  else if(crong_max>pobi_max)
    return 2;
  else if(crong_max==pobi_max) 
    return 0;


}  


module.exports = problem1;
