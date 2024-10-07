
function problem6(forms) {
  const map1=new Map();
  const set1 = new Set()
  forms.forEach(form => {
    nickname=form[1];
    for(let i=0 ; i<nickname.length-1;i++){
      let substrnick=nickname.substr(i,2);
      if(map1.has(substrnick)){
        set1.add(form[0]);
        set1.add(map1.get(substrnick));
      }
      else map1.set(substrnick,form[0])
    }
  });
  return Array.from(set1).sort();
}

module.exports = problem6;
