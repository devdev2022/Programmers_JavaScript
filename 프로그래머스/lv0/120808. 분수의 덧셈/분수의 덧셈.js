   function solution(denum1, num1, denum2, num2) {
    let answer =[];                                     
    let N = num1 * num2;                                
    let D = num1 * denum2 + num2 * denum1;              
    let gcd = (D, N) => (N > 0 ? gcd (N, D % N) : D);   
    let newDen = D / gcd(D,N);                          
    let newNum = N / gcd(D,N);                          
    return answer = [newDen, newNum];                   
    }
