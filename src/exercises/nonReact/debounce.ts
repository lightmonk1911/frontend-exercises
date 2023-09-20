export const debounce = (fn: Function, delay: number) => {
  let timerId: number | undefined;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = +setTimeout(() => {
      clearTimeout(timerId);
      fn(...args);
    }, delay);
  };
}
