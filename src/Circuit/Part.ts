import { BigNumber } from 'mathjs';
import PartType from "./PartType";

export default interface Part {
  conductance: BigNumber;
  voltage: BigNumber;
  current: BigNumber;
  firstPole: string;
  secondPole: string;
  poles: string[];
  type: PartType;
}
