import AbstractPart from './AbstractPart';
import IPartProperties from './Properties';
import { BigNumber, bignumber, divide } from 'mathjs';
import { zeroBigNumber } from '../../util/MathUtil';

export default class Resistor extends AbstractPart {
  readonly voltage: BigNumber = zeroBigNumber();
  readonly current: BigNumber = zeroBigNumber();
  readonly conductance: BigNumber;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.conductance = divide(bignumber(1), properties.resistance) as BigNumber;
  }

}
