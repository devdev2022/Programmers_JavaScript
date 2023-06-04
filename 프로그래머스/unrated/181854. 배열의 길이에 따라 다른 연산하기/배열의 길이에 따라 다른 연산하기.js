function solution(arr, n) {
  if (arr.length % 2 === 1) {
    let i = 0;
    while (i < arr.length) {
      arr[i] += n;
      i += 2;
    }
  } else {
    let i = 1;
    while (i < arr.length) {
      arr[i] += n;
      i += 2;
    }
  }
  return arr;
}
