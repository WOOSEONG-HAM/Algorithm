function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      result += absolutes[i]; // 양수는 더하고
    } else if (!signs[i]) {
      result -= absolutes[i]; // 음수는 앞에 부호를 붙여줘서 해결
    }
  }
  return result;
}
