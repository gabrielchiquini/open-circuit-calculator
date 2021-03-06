import { BigNumber } from "mathjs";
import { zeroBigNumber } from "../../util/MathUtil";
import PartType from "../PartType";
import AbstractPart from "./AbstractPart";
import IPartProperties from "./Properties";

export default class VoltageSource extends AbstractPart {
  public readonly conductance: BigNumber = zeroBigNumber();
  public readonly current: BigNumber = zeroBigNumber();
  public readonly voltage: BigNumber;
  public readonly type = PartType.VOLTAGE_SOURCE;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.voltage = properties.voltage;
  }
}
