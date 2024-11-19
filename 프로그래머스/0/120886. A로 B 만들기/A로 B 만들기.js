function solution(before, after) {    
    const countBefore = before.split("").sort().reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    
    const countAfter = after.split("").sort().reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    
     const beforekey = Object.keys(countBefore);
     const afterkey = Object.keys(countAfter);
    
    if(beforekey.every(key => countAfter.hasOwnProperty(key) && countBefore[key] === countAfter[key])) {
        return 1
    } else return 0

}