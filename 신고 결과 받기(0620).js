function solution(id_list, report, k) {
  let answer = [];
  let table = [];
  let mail = [];

  report.forEach((rep) => {
    let [a, b] = rep.split(" ");
    table[b] ? null : (table[b] = []);
    if (table[b] && !table[b].includes(a)) table[b].push(a);
  });

  for (let user of id_list) {
    if (table[user]) {
      if (table[user].length >= k) {
        table[user].forEach((u) => {
          mail[u] ? (mail[u] += 1) : (mail[u] = 1);
        });
      }
    }
  }
  for (let user of id_list) {
    if (mail[user] != undefined) {
      answer.push(mail[user]);
    } else {
      answer.push(0);
    }
  }

  return answer;
}
