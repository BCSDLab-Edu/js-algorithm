function problem5(money) {
  var goodthing = [0,0,0,0,0,0,0,0,0];
  goodthing[0] = Math.floor(money/50000);
  money %= 50000;
  goodthing[1] = Math.floor(money/10000);
  money %= 10000;
  goodthing[2] = Math.floor(money/5000);
  money %= 5000;
  goodthing[3] = Math.floor(money/1000);
  money %= 1000;
  goodthing[4] = Math.floor(money/500);
  money %= 500;
  goodthing[5] = Math.floor(money/100);
  money %= 100;
  goodthing[6] = Math.floor(money/50);
  money %= 50;
  goodthing[7] = Math.floor(money/10);
  money %= 10;
  goodthing[8] = Math.floor(money/1);
  return goodthing;
}

module.exports = problem5;
