function solution(my_string, indices) {
  let arr = my_string.split("");
  return arr.filter((x, index) => {
    for (let i = 0; i < indices.length; i++) {
      if (index === indices[i]) {
        return false;
      }
    }
    return true; 
  }).join("");
}