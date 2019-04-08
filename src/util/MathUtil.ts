import { BigNumber, bignumber } from 'mathjs';

export function zeroBigNumber() {
  return bignumber(0);
}

export function sumBigNumbers(...numbers: BigNumber[]): BigNumber {
  if (numbers.length > 0) {
    return numbers.reduce((acumulator, conductance) => acumulator.add(conductance));
  } else {
    return zeroBigNumber();
  }
}

export function zeroBigNumberArray(length :number): BigNumber[] {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = zeroBigNumber();
  }
  return arr;
}
