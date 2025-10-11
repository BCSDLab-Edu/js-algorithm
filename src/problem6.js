function problem6(forms) {
  let errorEmail = [];

  for(let i=0;i<forms.length;i++){
    const [email1, name1] = forms[i];
    for(let j=i+1;j<forms.length;j++){
      const [email2, name2] = forms[j];
      for(let k=0;k<name1.length-1;k++){
        const compareWords = name1.substring(k, k+2);
        if(name2.includes(compareWords)){
          if(!errorEmail.includes(email1)){
            errorEmail.push(email1);
          }
          if(!errorEmail.includes(email2)){
            errorEmail.push(email2);
          }
          break;
        }
      }
    }
  }

  return errorEmail.sort();
}

module.exports = problem6;
