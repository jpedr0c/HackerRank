export function getFirstCard(deck) {
    const [firstCard] = deck;
    return firstCard;
}

export function getSecondCard(deck) {
    const [, secondCard] = deck;
    return secondCard;
}

export function swapTopTwoCards(deck) {
    [deck[0], deck[1]] = [deck[1], deck[0]];
    return deck;
}

export function discardTopCard(deck) {
    const [firstCard, ...rest] = deck;
    return [firstCard, [...rest]];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

export function insertFaceCards(deck) {
    const [firstCard, ...rest] = deck;
    return [firstCard, ...FACE_CARDS, ...rest];
}