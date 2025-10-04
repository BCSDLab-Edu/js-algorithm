function problem7(user, friends, visitors) {
  var answer;
  let score = new Map();
  let userFriends = [];
  for (let f of friends) {
    if (f[1] === user) {
      userFriends.push(f[0]);
    } else if (f[0] === user) {
      userFriends.push(f[1]);
    }
  }
  for (let f of friends) {
    if (userFriends.includes(f[0]) 
      && f[1] !== user 
      && !userFriends.includes(f[1])) {
        if (score.has(f[1])) {
          score.set(f[1], score.get(f[1]) + 10);
        } else {
          score.set(f[1], 10);
        }
    } else if (userFriends.includes(f[1]) 
      && f[0] !== user 
      && !userFriends.includes(f[0])) {
        if (score.has(f[0])) {
          score.set(f[0], score.get(f[0]) + 10);
        } else {
          score.set(f[0], 10);
        }
    }
  }
  for (let v of visitors) {
    if (v !== user && !userFriends.includes(v)) {
      if (score.has(v)) {
        score.set(v, score.get(v) + 1);
      } else {
        score.set(v, 1);
      }
    }
  }
  arr = Array.from(score);
  arr.sort((a, b) => (b[1] - a[1])
    || a[0].localeCompare(b[0]));
  answer = [];
  const n = arr.length > 5 ? 5 : arr.length;
  for (let i = 0; i < n; i++) {
    answer.push(arr[i][0]);
  }

  return answer;
}

module.exports = problem7;
