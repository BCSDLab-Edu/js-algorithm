const { DefaultMap } = require('./data-sturcture');

function problem7(user, friends, visitors) {
  const graph = new DefaultMap(() => []);
  
  friends.forEach(([u, v]) => {
    graph.get(u).push(v);
    graph.get(v).push(u);
  });
  
  const answer = [...graph.keys()].reduce((scores, key) => {
    if (key === user || graph.get(user).includes(key)) {
      return scores.set(key, undefined);
    }

    const score = graph.get(key).reduce((acc, val) => {
      return acc + graph.get(user).includes(val);
    }, 0) * 10;

    return scores.set(key, score);
  }, new DefaultMap(() => 0));
  
  visitors.forEach(key => answer.set(key, answer.get(key) + 1));

  return [...answer]
    .filter(([_, score]) => !isNaN(score))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(a => a[0]);
}

module.exports = problem7;
