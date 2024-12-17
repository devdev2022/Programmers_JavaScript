function solution(id_pw, db) {
    const searchId = db.findIndex(element=>element[0]===id_pw[0])
    
    
    if (searchId !== -1) {
        const findPw = db[searchId][1] === id_pw[1];
        if (findPw) {
            return "login";
        } else {
            return "wrong pw";
        }
    }
    
    return "fail";
}