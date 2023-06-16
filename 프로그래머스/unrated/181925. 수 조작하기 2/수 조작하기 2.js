function solution(numLog) {
  const insert = {
    "1": "w",
    "-1": "s",
    "10": "d",
    "-10": "a"
  };

  
  let result = "";
  numLog.reduce((acc,_,idx) => {
    const operation = insert[numLog[idx+1]-numLog[idx]];
    if (operation) {
      result += operation;
    }
  },numLog[0]);

  return result;
}