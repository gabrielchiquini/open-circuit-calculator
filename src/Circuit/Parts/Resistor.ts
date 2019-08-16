import { BigNumber, bignumber, divide } from "mathjs";
import { zeroBigNumber } from "../../util/MathUtil";
import PartType from "../PartType";
import AbstractPart from "./AbstractPart";
import IPartProperties from "./Properties";

export default class Resistor extends AbstractPart {
  public readonly voltage: BigNumber = zeroBigNumber();
  public readonly current: BigNumber = zeroBigNumber();
  public readonly conductance: BigNumber;
  public readonly type = PartType.RESISTOR;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.conductance = divide(bignumber(1), properties.resistance) as BigNumber;
  }
}
