function problem7(user, friends, visitors) {
  map1= new Map();
  mapPoint= new Map();
  //친구 인접리스트 map으로
  friends.forEach(friend => {
    if(!map1.has(friend[0])) map1.set(friend[0],[friend[1]]);
    else map1.get(friend[0]).push(friend[1]);
    if(!map1.has(friend[1])) map1.set(friend[1],[friend[0]]);
    else map1.get(friend[1]).push(friend[0]);
  });


  //친구의친구 찾기
  map1.get(user).forEach(friends => {
    map1.get(friends).forEach(friendfriend =>{
      if(mapPoint.has(friendfriend)) mapPoint.set(friendfriend,mapPoint.get(friendfriend)+10);
      else mapPoint.set(friendfriend,10);
    })
  })
  
  //방문자 찾기
  visitors.forEach(visitor => {
    if(mapPoint.has(visitor)) mapPoint.set(visitor,mapPoint.get(visitor)+1);
    else mapPoint.set(visitor,1);
  })

  //나와 나의친구는 추천대상제외
  mapPoint.delete(user);
  map1.get(user).forEach(friend=>{
    if(mapPoint.has(friend)) mapPoint.delete(friend);
  })
  var answer=[];
  
  //value 기준 정렬
  let mapArray=[...mapPoint.entries()].sort((a, b) => b[1] - a[1]);


  //정답추가
  for (let i=0 ; i<mapArray.length && i<5;i++){
    if(mapArray[i][1]===0)break;
    answer.push(mapArray[i][0]);
  }
  return answer;
}

module.exports = problem7;
