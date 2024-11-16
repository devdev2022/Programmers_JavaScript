function solution(n) {
    let result=1;
    let search = 1;
    while(n>=result) {
        search++
        result*=search        
    }
    return (search-1)
}