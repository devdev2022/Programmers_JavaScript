function solution(myStr) {
  const regex = /[abc]+/;
  const result = myStr.split(regex).filter(x=> x !=="");
  
  if (result.length === 0) {
    return ["EMPTY"];
  }
  
  return result.filter(Boolean);
}