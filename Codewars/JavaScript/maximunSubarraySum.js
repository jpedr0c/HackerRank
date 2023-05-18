const maxSequence = (arr) => {
    let currentSum = 0;
    const maxSum = arr.reduce((max, num) => {
      currentSum = Math.max(num, currentSum + num);
      return Math.max(max, currentSum);
    }, 0);
  
    return maxSum;
}