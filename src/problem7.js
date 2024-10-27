function problem7(user, friends, visitors) {
  const friendList = new Set();
  const score = new Map();

  for (const [friend1, friend2] of friends) {
    if (friend1 === user) {
      friendList.add(friend2);
    }
    else if (friend2 === user) {
      friendList.add(friend1);
    }
  }

  for (const [friend1, friend2] of friends) {
    if (friend1 !== user && friend2 !== user) {
      if (friendList.has(friend1)) {
        score.set(friend2, (score.get(friend2) || 0)+10);
      }

      if (friendList.has(friend2)) {
        score.set(friend1, (score.get(friend1) || 0)+10);
      }
    }
  }

  for (const visitor of visitors) {
    if (!friendList.has(visitor) && visitor !== user) {
      score.set(visitor, (score.get(visitor) || 0)+1);
    }
  }

  const sorted = Array.from(score).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1]-a[1];
    }

    return a[0].localeCompare(b[0]);
  });

  const result = [];
  for (const [name, score_] of sorted) {
    if (result.length === 5) {
      break;
    }

    if (score_ > 0) {
      result.push(name);
    }
  }

  return result;
}

module.exports = problem7;
