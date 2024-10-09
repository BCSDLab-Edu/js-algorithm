function problem3(number) {
  const answer = [...Array(number).keys()]
    .reduce((sum, cur) => {
      return (cur + 1).toString().split("")
        .filter(num => "369".includes(num)).length + sum;
    }, 0);

  return answer;
}

module.exports = problem3;
