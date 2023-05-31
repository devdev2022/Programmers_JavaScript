function solution(myString, pat) {
  let arr = myString.split("");
  let result = arr.map((x) => (x === "A" ? "B" : "A"));

  for (let i = 0; i <= result.length - pat.length; i++) {
    let subString = result.slice(i, i + pat.length).join("");
    if (subString === pat) {
      return 1;
    }
  }
  return 0;
}
