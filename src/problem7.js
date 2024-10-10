function problem7(user, friends, visitors) {
  let user_friends = [];
  let score_dict = {};

  for (let i = 0; i < friends.length; i++) {
    let f0 = friends[i][0];
    let f1 = friends[i][1];
    if (f0 === user) {
      user_friends.push(f1);
    } else if (f1 === user) {
      user_friends.push(f0);
    }
  }

  for (let i = 0; i < friends.length; i++) {
    let f0 = friends[i][0];
    let f1 = friends[i][1];
    if (f0 === user || f1 === user) {continue;}

    if (user_friends.includes(f0)) {
      if (score_dict[f1]) {
        score_dict[f1] -= 10;
      } else {
        score_dict[f1] = -10;
      }
    } else if (user_friends.includes(f1)) {
      if (score_dict[f0]) {
        score_dict[f0] -= 10;
      } else {
        score_dict[f0] = -10;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    let now_visitors = visitors[i];
    if (!user_friends.includes(now_visitors)) {
      if (score_dict[now_visitors]) {
        score_dict[now_visitors] -= 1;
      } else {
        score_dict[now_visitors] = -1;
      }
    }
  }

  let res_list = Object.entries(score_dict)
    .sort((a, b) => a[1] - b[1])
    .map(item => item[0]) ;

  return res_list;
}

module.exports = problem7;
