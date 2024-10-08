function problem2(cryptogram) {
  var lst = cryptogram.split("");
  var previous = 0;

  while (lst.length !== previous) {
    previous = lst.length;

    for (let i = 0; i < lst.length - 1; i++) {
      if (lst[i] === lst[i + 1]) {
        lst.splice(i, 2);
        i--;
      }
    }
  }
  return lst.join("");
}

module.exports = problem2;
