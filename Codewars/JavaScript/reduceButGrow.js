function grow(x){
    let result = 1;
    for (let n of x)
        result *= n;
    return result; 
}