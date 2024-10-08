function problem6(forms) {
  let dict = new Map();
  let dup = new Map();
  let ans = new Set();

  for (element of forms) {
    const [K, V] = element;
    dict.set(K, V);
  }

  for (let [K, V] of dict) {
    for (let i = 0; i < V.length - 1; i++) {
      let char = V.slice(i, i + 2);

      if (dup.has(char)) {
        ans.add(K);
        ans.add(dup.get(char));
      } else dup.set(char, K);
    }
  }

  ans = [...ans].sort((a, b) => a - b);
  ans.sort((a, b) => a - b);

  return ans;
}

module.exports = problem6;
