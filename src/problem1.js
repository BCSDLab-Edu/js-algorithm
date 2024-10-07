//페이지 더하기,곱하기중 큰거반환
function getPoint(page) {
  let plusPoint = 0;
  let multPoint = 1;
  page.toString().split('').forEach(number => {
    parsedNumber = parseInt(number, 10)
    plusPoint += parsedNumber;
    multPoint *= parsedNumber;
  });

  return getBigPoint(plusPoint, multPoint)
}

//왼쪽,오른쪽페이지중 더 큰거반환
function bigPage(page) {
  const leftPoint = getPoint(page[0]);
  const rightPoint = getPoint(page[1]);
  return getBigPoint(leftPoint, rightPoint);
}

//더 큰거 반환
function getBigPoint(point1, point2) {
  return point1 >= point2 ? point1 : point2;
}


//두사람 포인트 비교
function comparePoint(pobipoint, crongpoint) {
  if (pobipoint > crongpoint) return 1;
  else if (pobipoint < crongpoint) return 2;
  else return 0;
}

//예외
function exceptPoint(point) {
  if (point[0] >= 400 || point[0] <= 1) return true;
  if (point[0] + 1 !== point[1]) return true;
  if (point[0] % 2 === 0 || point[1] % 2 !== 0) return true;

  return false;
}

function problem1(pobi, crong) {
  if (exceptPoint(crong) || exceptPoint(pobi)) { return -1; }

  var answer;
  pobipoint = bigPage(pobi);
  crongpoint = bigPage(crong);
  answer = comparePoint(pobipoint, crongpoint);
  return answer;
}


module.exports = problem1;
