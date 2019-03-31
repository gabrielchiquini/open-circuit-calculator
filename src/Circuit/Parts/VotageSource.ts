import AbstractPart from './AbstractPart';
import IPartProperties from './Properties';

export default class VoltageSource extends AbstractPart {
  private voltage: number;

  constructor(poles: string[], properties: IPartProperties) {
    super(poles, properties);
    this.voltage = properties.voltage;
  }
}
