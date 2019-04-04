import { BigNumber } from 'mathjs';
import AbstractPart from './AbstractPart';
import IPartProperties from './Properties';
import { zeroBigNumber } from '../../util/MathUtil';

export default class VoltageSource extends AbstractPart {
  readonly conductance: BigNumber = zeroBigNumber();
  readonly current: BigNumber = zeroBigNumber();
  readonly voltage: BigNumber;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.voltage = properties.voltage;
  }
}
