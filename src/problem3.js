function problem3(number) {
  let count = 0;

  for (let num = 1; num <= number; num++) {
    const str = num.toString();

    if (str.match(/[369]/g)){
      count += str.match(/[369]/g).length;
    }
  }

  return count;
}

module.exports = problem3;
