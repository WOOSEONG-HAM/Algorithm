function solution(array, commands) {
  return commands.map(
    (val) => array.slice(val[0] - 1, val[1]).sort((a, b) => a - b)[val[2] - 1]
  );
}
