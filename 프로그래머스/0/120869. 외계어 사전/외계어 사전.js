function solution(spell, dic) {
    for (let word of dic) {
        let isValid = true;

        for (let char of spell) {
            const count = word.split(char).length - 1; 

            if (count !== 1) {
                isValid = false;
                break;
            }
        }

        if (isValid) return 1;
    }
    return 2;
}