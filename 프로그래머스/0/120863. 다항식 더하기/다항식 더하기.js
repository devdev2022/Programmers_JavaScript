function solution(polynomial) {
    const separated = polynomial.split(" + ")
    const onlyX = separated.filter(val=>val.includes("x")).map(v => {
    const numberPart = v.replace("x", ""); 
    return numberPart === "" ? 1 : Number(numberPart); 
  }).reduce((acc, curr) => acc + curr, 0);
    
 
    const onlyN = separated.map(value=>(isNaN(Number(value)) ? null: Number(value))).reduce((acc,curr)=>acc+curr,0) 
    
    const result = [];
    if (onlyX > 0) result.push(`${onlyX === 1 ? "" : onlyX}x`);
    if (onlyN > 0) result.push(onlyN);

    return result.join(" + ") || "0";
}