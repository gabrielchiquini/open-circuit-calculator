import {BigNumber} from 'mathjs';
import Part from '../Part';
import PartType from "../PartType";
import IPartProperties from './Properties';

export default abstract class AbstractPart implements Part {
  public readonly poles: string[];
  public abstract readonly type: PartType;
  private properties: IPartProperties;

  protected constructor(poles: string[], properties: IPartProperties) {
    this.poles = poles;
    this.properties = properties;
  }

  abstract get conductance(): BigNumber;

  abstract get voltage(): BigNumber;

  abstract get current(): BigNumber;

  get firstPole(): string {
    return this.poles[0];
  }

  get secondPole(): string {
    return this.poles[1];
  }
}
