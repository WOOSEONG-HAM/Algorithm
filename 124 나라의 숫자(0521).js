//3으로 나눴을 때 나머지가 1이면 "1", 2이면 "2", 나누어 떨어지면 "4"가 나타난다.

function solution(n) {
  let answer = "";

  while (n > 0) {
    //n이 0이 아닐때까지 반복
    switch (
      n % 3 //3으로 나눈 나머지가 각각 0,1,2인 경우에
    ) {
      case 1:
        answer = "1" + answer; //10진수가 10인경우에는 맨처음 answer = '1' 그다음 switch문 돌면 answer = '4' + answer = '4'+'1' = '41'
        n = parseInt(n / 3);
        break;
      case 2:
        answer = "2" + answer;
        n = parseInt(n / 3);
        break;
      case 0:
        answer = "4" + answer;
        n = n / 3 - 1; //3으로 나눈 나머지가 0인 경우에(case 0)만 3으로나눈몫에 -1을 해줌
        break;
    }
  }
  return answer;
}
