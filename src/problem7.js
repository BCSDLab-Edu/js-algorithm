function problem7(user, friends, visitors) {
  const clsrn = new Set();
  var score = new Map();
  var result = [];
  
  friends.forEach(element => {//친구들 셋 추가
    const[friend1,friend2]= element;
    if(user === friend1){
      clsrn.add(friend2);
    }
    if(user === friend2){
      clsrn.add(friend1);
    }
  });


  friends.forEach(element => {//친구의 친구 10점 추가
    const [friend1,friend2] = element;
    if(clsrn.has(friend1) && friend2!==user && !clsrn.has(friend2)){
      score.set(friend2,(score.get(friend2)||0)+10);
    }
  
    if(clsrn.has(friend2) && friend1 !== user &&clsrn.has(friend1)){
      score.set(friend1,(score.get(friend1)||0)+10);
    }
  });

  visitors.forEach(visitor => {//방문자 1점 추가
    if(!clsrn.has(visitor)){
      score.set(visitor,(score.get(visitor)||0)+1);
    }
  });

  result=Array.from(score).sort((a, b) => b[1] - a[1]).map(item => item[0]);
  return result;
}

module.exports = problem7;
