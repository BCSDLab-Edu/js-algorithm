// LCS(Longest Common Substring) Algolrithm
const lcs = (a, b) => {
  const dp = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
      if (dp[i][j] > 1) return true;
    }
  }
  
  return false;
};

function problem6(forms) {
  const answer = [
    ...forms.reduce((dup, [email1, nick1], i) => {
      forms.slice(i + 1).forEach(([email2, nick2]) => {
        if (lcs(nick1, nick2))
          dup.add(email1).add(email2);
      });

      return dup;
    },
    new Set())
  ].sort();

  return answer;
}

module.exports = problem6;
