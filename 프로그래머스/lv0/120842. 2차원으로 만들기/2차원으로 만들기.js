function solution(num_list, n) {
   const result = num_list.reduce((acc, _, i) => {
  if (i % n === 0) {
    acc.push(num_list.slice(i, i + n));
  }
  return acc;
}, []);
    return result
}

