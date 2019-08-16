import { BigNumber } from "mathjs";
import { zeroBigNumber } from "../../util/MathUtil";
import PartType from "../PartType";
import AbstractPart from "./AbstractPart";
import IPartProperties from "./Properties";

export default class CurrentSource extends AbstractPart {
  public readonly conductance: BigNumber = zeroBigNumber();
  public readonly current: BigNumber;
  public readonly voltage: BigNumber = zeroBigNumber();
  public readonly type = PartType.CURRENT_SOURCE;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.current = properties.current;
  }
}
