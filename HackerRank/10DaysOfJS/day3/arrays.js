function getSecondLargest(nums) {
    const filterArray = nums.filter((num) => num !== Math.max(...nums))
    return Math.max(...filterArray);
}