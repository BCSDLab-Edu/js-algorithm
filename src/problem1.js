function problem1(pobi, crong) {
  
  [p, c] = [pobi, crong].map(pages => {
    if (pages[0] + 1 != pages[1]) return -1;
    
    return Math.max(
      ...pages.map(page => {
        var nums = page.toString().split("").map(Number);

        if (nums.includes(0)) {
          return nums.reduce((sum, cur) => sum + cur, 0);
        }
        
        return nums.reduce((mul, cur) => mul * cur, 1);
      })
    );
  });
  
  if ([p, c].includes(-1)) return -1;
  
  return p == c ? 0 : (p < c ? 2 : 1);
}

module.exports = problem1;
