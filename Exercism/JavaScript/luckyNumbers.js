export function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''));
}

export function luckyNumber(value) {
    return String(value).split('').reverse().join('') == value;
}

export function errorMessage(input) {
    if (!input)
      return 'Required field';
    return Number(input) ? '' : 'Must be a number besides 0';
}