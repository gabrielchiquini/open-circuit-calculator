import AbstractPart from "../Circuit/Parts/AbstractPart";
import IPartProperties from "../Circuit/Parts/Properties";
import Resistor from "../Circuit/Parts/Resistor";
import VoltageSource from "../Circuit/Parts/VotageSource";

export const PART_MAP: { [key: string]: PartConstructor } = {
  Resistor,
  VoltageSource,
};

export type PartConstructor = new (
  poles: string[],
  properties: IPartProperties,
) => AbstractPart;
