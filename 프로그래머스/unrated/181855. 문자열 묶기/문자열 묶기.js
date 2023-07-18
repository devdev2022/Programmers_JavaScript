function solution(strArr) {
  const groups = {};

  for (const str of strArr) {
    const length = str.length;
    if (groups[length]) {
      groups[length]++;
    } else {
      groups[length] = 1;
    }
  }

  const maxCount = Math.max(...Object.values(groups));

  return maxCount;
}