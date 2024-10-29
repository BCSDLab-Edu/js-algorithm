function sumPage(page){
  let sumScore = 0;
  while (page > 0) {
    sumScore += page % 10;
    page = Math.floor(page/10);
  }
  return sumScore;

}

function multiplyPage(page){
  let multiplyScore= 1;
  while (page > 0) {
    multiplyScore *= page % 10;
    page = Math.floor(page/10);
  }
  return multiplyScore;

}

function getMaxScore(leftPage, rightPage) {
  return Math.max(sumPage(leftPage), sumPage(rightPage), multiplyPage(leftPage), multiplyPage(rightPage));

}


function isValid(leftPage, rightPage){
  return (leftPage >= 1 && rightPage <= 400 && leftPage%2===1 && rightPage%2===0 && leftPage+1 === rightPage);

}

function problem1(pobi, crong) {
  if (!isValid(pobi[0], pobi[1]) || !isValid(crong[0], crong[1])) answer = -1;
  else {
    let pobiValue = getMaxScore(pobi[0],pobi[1]);
    let crongValue = getMaxScore(crong[0], crong[1]);
    var answer = 0;
    if (pobiValue>crongValue) answer = 1;
    if (pobiValue<crongValue) answer = 2;
  };
  return answer;

}

module.exports = problem1;
