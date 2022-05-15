export function titleString(str: string) {
  const firstletter = str[0];

  const rest = str.slice(1);

  return `${firstletter.toUpperCase()}${rest}`;
}
