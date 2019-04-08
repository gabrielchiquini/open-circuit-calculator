import { BigNumber } from 'mathjs';

export default interface Part {
  conductance: BigNumber;
  voltage: BigNumber;
  current: BigNumber;
  firstPole: string;
  secondPole: string;
  poles: string[];
}
