function solution(sizes) {
  var answer = 0;
  let maxLong = 0; //긴길이중 최댓값 변수 초기화
  let maxShort = 0; //짧은 길이 중 최댓값 변수 초기화

  for (const item of sizes) {
    //item[0]가로길이 item[1] 세로길이
    if (item[0] > item[1]) {
      //가로 길이가 세로길이보다 길다는 가정하에,
      if (maxLong < item[0]) {
        //긴 길이가 가로길이보다 작다면,
        maxLong = item[0]; // 긴 길이를 가로길이로 해주고,
      }
      if (maxShort < item[1]) {
        //짧은 길이가 세로길이보다 작다면,
        maxShort = item[1];
      }
    } else {
      //세로 길이가 가로길이보다 길다는 가정하에,
      if (maxLong < item[1]) {
        //긴 길이가 세로길이보다 작다면,
        maxLong = item[1]; // 긴길이를 세로길이로 해주고
      }
      if (maxShort < item[0]) {
        //짧은 길이가 가로길이보다 작다면,
        maxShort = item[0]; //짧은 길이를 가로 길이로 해줘라
      }
    }
  }
  answer = maxLong * maxShort;
  return answer;
}
