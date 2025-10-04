function problem1(pobi, crong) {
  var answer;
  if ((pobi[0] + 1 !== pobi[1])
    || (crong[0] + 1 !== crong[1])
    || (pobi[0] < 1 || pobi[0] > 400)
    || (crong[0] < 1 || crong[0] > 400)) {
    return -1;
  }
  const pobimax = getMax(pobi);
  const crongmax = getMax(crong);
  if (pobimax > crongmax) answer = 1;
  else if (pobimax < crongmax) answer = 2;
  else answer = 0;
  return answer;
}

function getMax(_arr) {
  const arr=[];
  for (let _a of _arr) {
    let a=_a;
    const row=[];
    while (a > 0) {
      row.push(a % 10);
      a = Math.floor(a / 10);
    }
    arr.push(row);
  }
  const maxArr=[];
  for (let row of arr) {
    let sum=0;
    let mul=1;
    for (let n of row) {
      sum += n;
      mul *= n;
    }
    maxArr.push(sum, mul);
  }
  return Math.max(...maxArr);
}

module.exports = problem1;