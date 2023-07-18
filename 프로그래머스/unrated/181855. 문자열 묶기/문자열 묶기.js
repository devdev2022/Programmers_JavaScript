let strArr = ["a","bc","d","efg","hi"]

function solution(strArr) {
  let letterLength = [];
  let group = [];
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    letterLength.push(strArr[i].length);
  }

  letterLength.map((num) => {
    if (!group[num]) {
      group[num] = [];
    }
    group[num].push(num);
  });

  for (let j = 0; j < group.length; j++) {
    if (group[j]) {
      result.push(group[j].length);
    }
  }

  return Math.max(...result);
}
