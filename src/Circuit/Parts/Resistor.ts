import { BigNumber, bignumber, divide } from "mathjs";
import { zeroBigNumber } from "../../util/MathUtil";
import AbstractPart from "./AbstractPart";
import IPartProperties from "./Properties";

export default class Resistor extends AbstractPart {
  public readonly voltage: BigNumber = zeroBigNumber();
  public readonly current: BigNumber = zeroBigNumber();
  public readonly conductance: BigNumber;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.conductance = divide(bignumber(1), properties.resistance) as BigNumber;
  }
}
