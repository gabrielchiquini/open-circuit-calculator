import math, { BigNumber } from 'mathjs';
import Part from '../Part';
import IPartProperties from './Properties';

export default abstract class AbstractPart implements Part {
  public readonly poles: string[];
  private properties: IPartProperties;
  abstract get conductance(): BigNumber;

  constructor(poles: string[], properties: IPartProperties) {
    this.poles = poles;
    this.properties = properties;
  }

  abstract get voltage(): BigNumber;

  abstract get current(): BigNumber;

  get firstPole(): string {
    return this.poles[0];
  }
  get secondPole(): string {
    return this.poles[1];
  }
}
