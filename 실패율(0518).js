function solution(N, stages) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    // 전체 스테이지보다 큰 경우 계산할 필요가 없음
    const challengers = stages.filter((x) => x >= i).length; // 해당 스테이지를 시도한 사람
    const losers = stages.filter((x) => x === i).length; // 해당 스테이지에 멈춰있는 사람
    result.push([i, losers / challengers]); // 배열 첫번째 요소에는 스테이지, 두번째에는 실패율(시도한 사람에서 멈춰있는 사람을 나눈값)
  }
  result.sort((a, b) => b[1] - a[1]); // 실패율로 내림차순으로 정렬
  return result.map((x) => x[0]); // 스테이지만 뽑아냄
}
