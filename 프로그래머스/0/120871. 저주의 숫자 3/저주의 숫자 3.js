function solution(n) {
  const result = []; 
  let current = 1; 
  while (result.length < n) { 
    if (!String(current).includes('3') && current % 3 !== 0) {
      result.push(current); 
    }
    current++; 
  }
  return result[result.length-1]; 
}