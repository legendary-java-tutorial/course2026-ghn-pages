export type Config = { greeting: string; min: number; max: number };
export function hint(secret: number, guess: number): string {
  return guess < secret ? "больше" : guess > secret ? "меньше" : "угадал";
}
