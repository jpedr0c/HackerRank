function getMaxLessThanK(n, k){
    let count = 0;
    
    for (let a = 1; a < n; a++)
        for (let b = a + 1; b <= n; b++){
            const bitwise = a & b;
            if (bitwise < k && bitwise > count)
                count = bitwise;    
        }
    return count; 
}