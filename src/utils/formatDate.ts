const gameFormatter = new Intl.DateTimeFormat('en', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

export function formatGameDate(date: Date) {
  return gameFormatter.format(date);
}

export function formaeGameStrDate(date: string) {
  return formatGameDate(new Date(date));
}
