import math, { BigNumber } from 'mathjs';
import IPartProperties from './Properties';
import Part from '../Part';

export default abstract class AbstractPart implements Part {
  private properties: IPartProperties;
  private _poles: string[];

  constructor(poles: string[], properties: IPartProperties) {
    this._poles = poles;
    this.properties = properties;
  }

  abstract get conductance(): BigNumber;

  abstract get voltage(): BigNumber;

  abstract get current(): BigNumber;

  get poles(): string[] {
    return this.poles.slice(0);
  }
}
