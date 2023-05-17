function divisors(integer) {
    const result = [];
    const lastDivisor = Math.floor(integer / 2);
    
    for (let i = 2; i <= lastDivisor; i++){
      if (integer % i == 0)
        result.push(i);
    }
    
    return result.length ? result : `${integer} is prime`;
};