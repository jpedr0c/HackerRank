function accum(s) {
    const arr = s.split('');
    const result = arr.map((letter, i) => {
      const firstLetter = letter.toUpperCase();
      const rest = Array(i + 1).join(letter.toLowerCase());
      return firstLetter + rest;
    });
    return result.join("-");
}