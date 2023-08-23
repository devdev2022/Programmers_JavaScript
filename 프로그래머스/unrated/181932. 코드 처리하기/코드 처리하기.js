function solution(code) {
    let find = []
    let pattern = /1/g;
    
    let match = pattern.exec(code);
    while(match) {
        find.push(match.index);
        match = pattern.exec(code);
    }

    let ret = '';
    let mode = 0;
    let start = 0;

    for (let index of find) {
        for (let i = start; i < index; i++) {
            if (mode === 0 && i % 2 === 0) {
                ret += code[i];
            } else if (mode === 1 && i % 2 === 1) {
                ret += code[i];
            }
        }
        mode = 1 - mode; 
        start = index + 1; 
    }
    
    for (let i = start; i < code.length; i++) {
        if (mode === 0 && i % 2 === 0) {
            ret += code[i];
        } else if (mode === 1 && i % 2 === 1) {
            ret += code[i];
        }
    }

    return ret === '' ? 'EMPTY' : ret;
}
