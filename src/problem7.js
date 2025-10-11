function problem7(user, friends, visitors) {
  const friendMap = new Map();
  const scoreMap = new Map();
  const myFriends = new Set();

  function addFriendship(a, b) {
    if (!friendMap.has(a)) friendMap.set(a, new Set());
    friendMap.get(a).add(b);
  }

  for (const [idA, idB] of friends) {
    addFriendship(idA, idB);
    addFriendship(idB, idA);

    if (idA === user) myFriends.add(idB);
    if (idB === user) myFriends.add(idA);
  }

  for (const visitorId of visitors) {
    if (visitorId === user || myFriends.has(visitorId)) {
      continue;
    }

    const currentScore = scoreMap.get(visitorId) || 0;
    scoreMap.set(visitorId, currentScore + 1);
  }

  const userFriends = friendMap.get(user) || new Set();

  for (const friendId of userFriends) {
    const potentialFriends = friendMap.get(friendId) || new Set();

    for (const candidateId of potentialFriends) {
      if (candidateId === user || myFriends.has(candidateId)) {
        continue;
      }

      const currentScore = scoreMap.get(candidateId) || 0;
      scoreMap.set(candidateId, currentScore + 10);
    }
  }

  const sortedCandidates = Array.from(scoreMap.entries())
    .filter(([_, score]) => score > 0)
    .sort(([idA, scoreA], [idB, scoreB]) => {
      if (scoreA !== scoreB) {
        return scoreB - scoreA;
      }
      return idA.localeCompare(idB);
    })
    .map(([id, _]) => id)
    .slice(0, 5);

  return sortedCandidates;
}

module.exports = problem7;
