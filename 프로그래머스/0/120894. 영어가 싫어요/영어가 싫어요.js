function solution(numbers) {
    let table = {
        zero: 0,
        one : 1,
        two : 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    let resultArray = []
    let arrayed = Object.keys(table)
    arrayed.forEach((item) => {
      const regex = new RegExp(item, "g"); 
      numbers = numbers.replace(regex, table[item]);
    });
    return Number(numbers)
}