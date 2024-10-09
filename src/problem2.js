function problem2(cryptogram) {
  let answer;

  while (cryptogram != answer) {
    answer = cryptogram;
    cryptogram = cryptogram.replace(/(.+)\1+/g, '');
  }

  return answer;
}

module.exports = problem2;
