export const displaySeconds = (seconds: number) => {
  const _minutes = Math.trunc(seconds/60);
  const _seconds = seconds - _minutes*60;
  return {
    minutes: _minutes,
    seconds: _seconds.toString().padStart(2, '0')
  }
}
