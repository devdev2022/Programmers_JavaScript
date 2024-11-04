function solution(order) {

  const matches = order.toString().match(/[369]/g);
  return matches ? matches.length : 0;
    
}