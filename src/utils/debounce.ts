export function debounce(fn: () => void, timeout = 1000) {
  let timerId: NodeJS.Timeout;

  return () => {
    clearTimeout(timerId);

    timerId = setTimeout(fn, timeout);
  };
}
