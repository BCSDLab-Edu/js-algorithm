function problem4(word) {
  const answer = word.replace(/[a-zA-Z]/g, char =>
    String.fromCharCode(
      char.toLowerCase() == char
        ? 219 - char.charCodeAt()
        : 155 - char.charCodeAt()
    )
  );
  return answer;
}

module.exports = problem4;
