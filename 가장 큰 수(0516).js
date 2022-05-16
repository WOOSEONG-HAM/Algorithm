// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  numbers.sort((a, b) => {
    return String(b) + String(a) - (String(a) + String(b));
    // 앞뒤의 숫자를 문자열로 합친 후에 내림차순으로 정렬하면 답을 얻을 수 있음
  });
  return numbers[0] === 0 ? "0" : numbers.join("");
  // 테스트케이스 11번 오류
  // 정렬 후에 맨 앞이 0이면 배열의 모든 수가 0이라는 말이기 때문에 0을 리턴
}
