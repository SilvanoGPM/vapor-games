function clearDate(date: string) {
  return date.includes('T') ? date.split('T')[0] : date;
}

export function formatGameDate(date: string) {
  const clearedDate = clearDate(date);

  return clearedDate.replaceAll('-', ' ');
}
