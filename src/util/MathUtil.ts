import { BigNumber, bignumber } from "mathjs";

export function zeroBigNumber() {
  return bignumber(0);
}

export function sumBigNumbers(...numbers: BigNumber[]): BigNumber {
  return numbers.reduce((acumulator, conductance) =>
    acumulator.add(conductance),
  );
}
