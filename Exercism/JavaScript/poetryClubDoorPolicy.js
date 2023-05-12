export function frontDoorResponse(line) {
    return line[0];
}

export function frontDoorPassword(word) {
    let arrayWord = word.split('');
    let firstWord = arrayWord[0].toUpperCase();
    let string = firstWord;
    for (let i = 1; i < arrayWord.length; i++)
      string += arrayWord[i].toLowerCase();
    return string;
}

export function backDoorResponse(line) {
    let split = line.trim(' ').split('');
    let length = split.length;
    return split[length - 1];
}

export function backDoorPassword(word) {
    return frontDoorPassword(word) + ", please";
}