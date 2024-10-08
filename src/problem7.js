function problem7(user, friends, visitors) {
  let frined_list = new Map();
  let user_list = new Set();
  let ans = [];

  for (let [f1, f2] of friends) {
    if (f1 === user) {
      user_list.add(f2);
    } else if (f2 === user) {
      user_list.add(f1);
    }
  }

  for (let [f1, f2] of friends) {
    if (f1 !== user && f2 !== user) {
      if (user_list.has(f1)) {
        if (frined_list.has(f2)) {
          frined_list.set(f2, frined_list.get(f2) + 10);
        } else {
          frined_list.set(f2, 10);
        }
      }

      if (user_list.has(f2)) {
        if (frined_list.has(f1)) {
          frined_list.set(f1, frined_list.get(f1) + 10);
        } else {
          frined_list.set(f1, 10);
        }
      }
    }
  }

  for (let friend of visitors) {
    if (frined_list.has(friend)) {
      frined_list.set(friend, frined_list.get(friend) + 1);
    } else {
      frined_list.set(friend, 1);
    }
  }

  let lst = Array.from(frined_list).sort(function (a, b) {
    if (b[1] != a[1]) {
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  });

  for (let [name, score] of lst) {
    if (ans.length === 5) {
      break;
    }
    if (score > 0 && !user_list.has(name)) {
      ans.push(name);
    }
  }
  return ans;
}

module.exports = problem7;
