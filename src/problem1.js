function problem1(pobi, crong) {
  if (pobi[1] !== pobi[0]+1 || crong[1] !== crong[0]+1){
    return -1;
  }

  const pobiValue = Math.max(getMaxValue(pobi[0]), getMaxValue(pobi[1]));
  const crongValue = Math.max(getMaxValue(crong[0]), getMaxValue(crong[1]));

  if (pobiValue > crongValue) {
    return 1;
  } 

  else if (pobiValue < crongValue) {
    return 2;
  } 
  
  else {
    return 0;
  }
}

function getMaxValue(page) {
  let sum = 0;
  let mul = 1;

  const numbers = String(page).split("");

  for (let number of numbers) {
    sum += Number(number);
    mul *= Number(number);
  }

  return Math.max(sum, mul);
}

module.exports = problem1;
