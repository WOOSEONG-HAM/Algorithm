function solution(s, n) {
  let answerArray = [];
  let answer = "";
  let ascii = 0;
  for (var i = 0; i < s.length; i++) {
    ascii = s.charCodeAt(i);
    if (ascii === 32) {
      // 공백은 아스키코드 32
      answerArray.push(" ");
    } else {
      if (92 <= ascii && ascii <= 122) {
        if (ascii + n > 122) {
          // 아스키코드에서 n만큼 더했는데 z(122)가 넘어갈 경우
          answerArray.push(String.fromCharCode(ascii + n - 26)); // 알파벳 26개라서 아스키코드 122가 넘어가면 26만큼 빼줌.
        } else {
          answerArray.push(String.fromCharCode(ascii + n));
        }
      } else {
        if (ascii + n > 90) {
          // 아스키코드에서 n만큼 더했는데 Z(90)가 넘어갈 경우
          answerArray.push(String.fromCharCode(ascii + n - 26));
        } else {
          answerArray.push(String.fromCharCode(ascii + n));
        }
      }
    }
  }
  answer = answerArray.join("");
  return answer;
}
