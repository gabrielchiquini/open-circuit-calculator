export function trueMatrix(size: number) {
  const line = new Array(size).fill(true);
  return new Array(size).fill(line);
}

export function trueArray(size: number) {
  return new Array(size).fill(true);
}
