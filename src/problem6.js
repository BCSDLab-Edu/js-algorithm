function problem6(forms) {
  const emailSet = new Set(); 

  function getchars(nickname) {
    const name = new Set();
    for (let i = 0; i < nickname.length - 1; i++) {
      name.add(nickname.slice(i, i + 2)); 
    }
    return Array.from(name);
  }

  for (let i = 0; i < forms.length; i++) {
    const [email1, nickname1] = forms[i];
    const name1Substrings = getchars(nickname1);

    for (let j = 0; j < forms.length; j++) {
      if (i === j) continue; 

      const [email2, nickname2] = forms[j];
      for (const substring of name1Substrings) {
        const regExp = new RegExp(substring);
        if (regExp.test(nickname2)) {
          emailSet.add(email1);
          emailSet.add(email2);
          break;
        }
      }
    }
  }

  return Array.from(emailSet).sort();
}

module.exports = problem6;
