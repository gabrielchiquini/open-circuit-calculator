import IPartProperties from './Properties';
import Part from '../Part';

export default abstract class AbstractPart implements Part {
  private properties: IPartProperties;
  private poles: string[];

  constructor(poles: string[], properties: IPartProperties) {
    this.poles = poles;
    this.properties = properties;
  }
}
