export function hint(secret, guess) {
    return guess < secret ? "больше" : guess > secret ? "меньше" : "угадал";
}
