import AbstractPart from '../Circuit/Parts/AbstractPart';
import Resistor from '../Circuit/Parts/Resistor';
import VoltageSource from '../Circuit/Parts/VotageSource';
import IPartProperties from '../Circuit/Parts/Properties';

export const PART_MAP: { [key: string]: PartConstructor } = {
  Resistor,
  VoltageSource,
};

type PartConstructor = new (poles: string[], properties: IPartProperties) => AbstractPart;
