function solution(n_str) {
    let i = 0;
  while (i < n_str.length) {
    if (n_str[i] === "0") {
      n_str = n_str.slice(1); 
    } else {
      break;
    }
  }
  return n_str;
}