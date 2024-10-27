function problem6(forms) {
  const result = new Set();

  for (let i = 0; i < forms.length; i++) {
    for (let j = i+1; j < forms.length; j++) {
      for (let k = 0; k < forms[i][1].length-1; k++) {
        const piece = forms[i][1].slice(k, k+2);

        if (forms[j][1].includes(piece)) {
          result.add(forms[i][0]);
          result.add(forms[j][0]);
        }
      }
    }
  }

  return Array.from(result).sort()
}

module.exports = problem6;
