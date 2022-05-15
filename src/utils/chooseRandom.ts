export function chooseRandom<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomIndex];
}
