function solution(s) {
  var answer = true;
  var checkArray = [];
  for (const i of s) {
    i === "("
      ? checkArray.push("(")
      : checkArray.length > 0
      ? checkArray.pop()
      : (answer = false);
  }

  return checkArray.length > 0 || !answer ? false : true;
}
