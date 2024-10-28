function problem6(forms) {
  var answer = [];
  var info = new Map();
  var same;
  var sameSet = new Set();
  var dup = new Map();
  for(const [email, name] of forms) {
    info.set(email, name);
  }

  for(var [email, name] of info){
    for (var i=0; i<name.length-1; i++) {
      for (var j=2; j<=name.length-i; j++) {
        same = name.slice(i, i+j);

        if (dup.has(same)) {
          sameSet.add(dup.get(same));
          sameSet.add(email);
        }
        else{
          dup.set(same, email);
        }
      }
    }
  }
  for(let email of sameSet){
    answer.push(email);
  }
  answer = answer.sort();
  return answer;
}

module.exports = problem6;