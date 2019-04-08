import { BigNumber } from "mathjs";
import { zeroBigNumber } from "../../util/MathUtil";
import AbstractPart from "./AbstractPart";
import IPartProperties from "./Properties";

export default class CurrentSource extends AbstractPart {
  public readonly conductance: BigNumber = zeroBigNumber();
  public readonly current: BigNumber;
  public readonly voltage: BigNumber = zeroBigNumber();

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.current = properties.current;
  }
}
