import AbstractPart from './AbstractPart';
import IPartProperties from './Properties';

export default class Resistor extends AbstractPart {
  private resistance: number;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.resistance = properties.resistance;
  }
}
