function problem4(word) {
  word = word.split("");
  ans = [];

  for (let i of word) {
    let asc = i.charCodeAt(0);
    if (65 <= asc && asc <= 90) {
      ans.push(String.fromCharCode(155 - asc));
    } else if (97 <= asc && asc <= 122) {
      ans.push(String.fromCharCode(219 - asc));
    } else ans.push(i);
  }

  return ans.join("");
}

module.exports = problem4;
