import {BigNumber} from "mathjs";
import {zeroBigNumber} from "../../util/MathUtil";
import PartType from "../PartType";
import AbstractPart from "./AbstractPart";
import IPartProperties from "./Properties";

export default class Ground extends AbstractPart {
  public readonly conductance: BigNumber = zeroBigNumber();
  public readonly current: BigNumber = zeroBigNumber();
  public readonly voltage: BigNumber = zeroBigNumber();
  public readonly type = PartType.GROUND;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
  }
}
