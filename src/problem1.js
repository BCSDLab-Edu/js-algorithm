function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  const pobiMax = Math.max(maxValue(String(pobi[0])), maxValue(String(pobi[1])));
  const crongMax = Math.max(maxValue(String(crong[0])), maxValue(String(crong[1])));

  if(pobiMax > crongMax){
    return 1;
  } else if(pobiMax < crongMax){
    return 2;
  } else {
    return 0;
  }
  
}

function maxValue(page){
  let sum = 0;
  let mul = 1;
  const pageStr = page.split("");
  for(let i of pageStr){
    sum += Number(i);
    mul *= Number(i);
  }
  return Math.max(sum, mul);
}

  
module.exports = problem1;
